import { FOUNDATIONS } from '../../constants/Fundaciones'
import "./Fundaciones.css"

export default function Fundaciones() {
    return (
        <div className="fundaciones">
            <div className="fundaciones-intro">
                <h1>Fundaciones</h1>
                <p className="fundaciones-subtitle">Fundaciones privadas</p>
            </div>
            <div className="fundaciones-grid">
                {FOUNDATIONS.map((fundacion) => (
                    <div key={fundacion.id} className="fundacion-card">
                        <img src={fundacion.picture} alt={fundacion.name} />
                        <div className="fundacion-card-body">
                            <h2>{fundacion.name}</h2>
                            <p>{fundacion.description}</p>
                            <div className="fundacion-card-meta">
                                <span>📍 {fundacion.city}</span>
                                <span>📞 {fundacion.phone}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}