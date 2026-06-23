import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, deleteDoc, doc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, auth } from "../components/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

const THREE_WEEKS_MS = 21 * 24 * 60 * 60 * 1000;

export function usePets() {
  const [lostPets, setLostPets] = useState([]);
  const [recienLlegados, setRecienLlegados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check admin status when auth changes
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const adminDoc = await getDoc(doc(db, "admins", user.email));
        setIsAdmin(adminDoc.exists());
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    let lostReady = false;
    let adoptionReady = false;

    const unsubLost = onSnapshot(collection(db, "lost"), (snap) => {
      const now = Date.now();
      const active = [];
      snap.docs.forEach((d) => {
        const data = d.data();
        const createdAt = new Date(data.createdAt).getTime();
        if (createdAt && now - createdAt > THREE_WEEKS_MS) {
          deleteDoc(doc(db, "lost", d.id));
        } else {
          active.push({ id: d.id, ...data });
        }
      });
      setLostPets(active);
      lostReady = true;
      if (lostReady && adoptionReady) setLoading(false);
    });

    const unsubAdoption = onSnapshot(collection(db, "adoption"), (snap) => {
      const now = Date.now();
      const active = [];
      snap.docs.forEach((d) => {
        const data = d.data();
        const createdAt = new Date(data.createdAt).getTime();
        if (createdAt && now - createdAt > THREE_WEEKS_MS) {
          deleteDoc(doc(db, "adoption", d.id));
        } else {
          active.push({ id: d.id, ...data });
        }
      });
      setRecienLlegados(active);
      adoptionReady = true;
      if (lostReady && adoptionReady) setLoading(false);
    });

    return () => {
      unsubLost();
      unsubAdoption();
    };
  }, []);

  async function handleAddAnimal(target, formData) {
    let pictureUrl = "default.png";
    if (formData.photo) {
      const photoRef = ref(storage, `${target}/${Date.now()}_${formData.photo.name}`);
      await uploadBytes(photoRef, formData.photo);
      pictureUrl = await getDownloadURL(photoRef);
    }
    await addDoc(collection(db, target), {
      name:        formData.name,
      species:     formData.species,
      breed:       formData.breed,
      age:         formData.age,
      color:       formData.color,
      gender:      formData.gender,
      description: formData.description,
      city:        formData.city,
      date:        formData.date,
      address:     formData.address,
      contactName: formData.contactName,
      phone:       formData.phone,
      email:       formData.email,
      picture:     pictureUrl,
      userId:      auth.currentUser.uid,
      createdAt:   new Date().toISOString(),
      type:        target,
    });
  }

  async function handleDelete(target, id) {
    await deleteDoc(doc(db, target, id));
  }

  return { lostPets, recienLlegados, loading, isAdmin, handleAddAnimal, handleDelete };
}