import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Carta from '../components/Carta';
const API = 'https://restcountries.com/v3.1/name/';

const Detalles = () => {
    const params = useParams()
    const [datos, setDatos] = useState([])
    let URI = API + params.name
    const getDatos = async () => {
        try {
            const response = await fetch(URI);
            const data = await response.json();
            console.log(data)
            setDatos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            <div className="container">
                <h3 className="text-center py-4">Detalles del Pais: {params.name} </h3>
                <div className="row">
                    {datos && datos.map((item) => (
                        <div className="row py-2">
                            <div className="col-md-5">
                                <img src={item.flags.png} className="card-img-top img-thumbnail" alt="..." loading="lazy" />

                            </div>
                            <div className="col-md-7">
                                <h3>{item.name.common}</h3>
                                <h4>Capital: <span className="fw-bold">{item.capital}</span></h4>
                                <h4>Poblacion: <span className="badge bg-info">{item.population}</span></h4>
                                <h4>Region: <span className="fw-bold">{item.region}</span></h4>
                                <h4>Nombre completo original: <span className="fw-bold">{item.name.nativeName.official}</span></h4>





                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Detalles