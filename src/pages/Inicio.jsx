import React from 'react'
import { useEffect, useState } from "react";
import Carta from '../components/Carta';
const API= "https://restcountries.com/v3.1/all"
const Inicio = () => {
    const [datos, setDatos] = useState([]);
    const getDatos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data);
        setDatos(data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getDatos();
    }, []);

  return (
    <>
     <div className="container">
        <h3 className="text-center py-4">Paises</h3>
            <div className="row">
                {datos && datos.map((item, index)=>(
                  <Carta key={index} index={index} item={item}/>
                ))}
            </div>
        </div>
    
    
    
    
    </>
    
  )
}

export default Inicio