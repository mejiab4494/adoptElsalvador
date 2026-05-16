const lostPets = [
    {
        id: 1,
        picture: "luna.png",
        name: "Luna",
        age: "2 años",
        breed: "Labrador Mestiza",
        description: "Luna es una perra dulce y juguetona que adora los paseos largos y las tardes de mimos. Se lleva bien con niños y otros perros. Busca una familia que le dé el amor que merece."
    },
    {
        id: 2,
        picture: "milo.png",
        name: "Milo",
        age: "4 años",
        breed: "Beagle",
        description: "Milo es un compañero leal y tranquilo, perfecto para apartamentos. Le encanta dormir en el sofá y dar paseos cortos por el parque. Está vacunado y esterilizado."
    },
    {
        id: 3,
        picture: "canela.png",
        name: "Canela",
        age: "1 año",
        breed: "Gata Doméstica",
        description: "Canela es una gatita curiosa y cariñosa que ronronea al instante. Le encanta explorar cada rincón de la casa y jugar con cualquier cosa que encuentre. Ideal para hogares tranquilos."
    },
    {
        id: 4,
        picture: "rocky.png",
        name: "Rocky",
        age: "3 años",
        breed: "Pastor Alemán Mestizo",
        description: "Rocky es inteligente, protector y muy fiel. Aprende comandos rápidamente y es excelente con adultos. Necesita un hogar con espacio y un dueño con experiencia en perros grandes."
    },
        {
        id: 5,
        picture: "luna.png",
        name: "Luna",
        age: "2 años",
        breed: "Labrador Mestiza",
        description: "Luna es una perra dulce y juguetona que adora los paseos largos y las tardes de mimos. Se lleva bien con niños y otros perros. Busca una familia que le dé el amor que merece."
    },
    {
        id: 6,
        picture: "milo.png",
        name: "Milo",
        age: "4 años",
        breed: "Beagle",
        description: "Milo es un compañero leal y tranquilo, perfecto para apartamentos. Le encanta dormir en el sofá y dar paseos cortos por el parque. Está vacunado y esterilizado."
    },
    {
        id: 7,
        picture: "canela.png",
        name: "Canela",
        age: "1 año",
        breed: "Gata Doméstica",
        description: "Canela es una gatita curiosa y cariñosa que ronronea al instante. Le encanta explorar cada rincón de la casa y jugar con cualquier cosa que encuentre. Ideal para hogares tranquilos."
    },
    {
        id: 8,
        picture: "rocky.png",
        name: "Rocky",
        age: "3 años",
        breed: "Pastor Alemán Mestizo",
        description: "Rocky es inteligente, protector y muy fiel. Aprende comandos rápidamente y es excelente con adultos. Necesita un hogar con espacio y un dueño con experiencia en perros grandes."
    }
]

export function addLostAnimal(data) {
  lostPets.push({
    ...data,
    id: lostPets.length + 1,
    picture: data.photo ? URL.createObjectURL(data.photo) : "default.png",
  });
}


export default lostPets;