import React from 'react';
import '../Estilos-componentes/Bienvenida.css';
import twitter from '../imagenes/twitter.png'
import instagram from '../imagenes/instagram.png'
import facebook from '../imagenes/facebook.png'

function Bienvenida () {
    return(
        <>
            <div className='mensajeSaludo'>
                <h1 className='mensajeSaludo-titulo'>¡BIENVENIDO A MOTOREX!</h1>
                <p className='mensajeSaludo-descripcion'>Tu tienda de confianza en venta de motos nuevas y usadas. Ofrecemos modelos de las mejores marcas, financiación accesible y asesoramiento personalizado.
                Viví el camino. Sentí la libertad.</p>
                
                <img src={twitter}/>
                <img src={instagram}/>
                <img src={facebook}/>
            </div>
        </>
    )
}

export default Bienvenida;