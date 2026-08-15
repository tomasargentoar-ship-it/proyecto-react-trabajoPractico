import React from "react";
import '../styles/soporte.css'
import Boton from "../componentes/Boton";
import { Link } from "react-router-dom";
export function Soporte({flashLight,setFlashLight}){
    return(
    <main>
    <section className="Titulo">
    <h1>Soporte</h1>
    <p>Reporta Aqui Abajo👇</p>
    </section>
    <form className="sectionForm">
    <h2>Complete y cuentenos su problema</h2>
    <label>
    <input type="text" placeholder="Ingrese su Nombre y Apellido"></input>
    </label>
    <label>
    <input type="email" placeholder="Ingrese su Gmail"></input>
    </label>
    <label>
    <input type="text" placeholder="Informe su Problema"></input>
    </label>
    <label>
    <input type="file"></input>
    </label>
    </form>
    <nav className="navlink">
    <Link to="/" className="link">Inicio</Link>
    </nav>
    </main>
    );
}