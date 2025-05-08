import React from "react";
import Bienvenida from "./Bienvenida";
import '../Estilos-componentes/Login.css';

function Login () {
    return(
        <>
            <div className="contenedorInicio">
                <Bienvenida />
                <div className="subContenedor">
                    <h3 className="subContenedor-titulo">Iniciar Sesión</h3>

                    <label className="subContenedor-input_label">Usuario</label>
                    <input className="subContenedor-input" type="text" />

                    <label className="subContenedor-input_label">Contraseña</label>
                    <input className="subContenedor-input" type="password" />

                    <input className="subContenedor-checkbox" type="checkbox"/>
                    <p className="subContenedor-checkbox_pregunta">¿Recordar inicio de sesión?</p>
                    <button className="subContenedor-boton">Ingresar</button>
                </div>
            </div>
        </>
    )
}

export default Login;