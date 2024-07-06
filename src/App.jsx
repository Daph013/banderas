import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Contactos from './pages/Contactos'
import Continentes from './pages/Continentes'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Footer from './components/Footer'
import Detalles from './pages/Detalles'


const App = () => {
  return (
    <>
     <BrowserRouter>
        <Header/>
        
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/contactos" element={<Contactos/>} />
            <Route path="/continentes/:id" element={<Continentes/>} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/detalles/:name" element={<Detalles/>} />
            
        </Routes>
       
        <Footer/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App