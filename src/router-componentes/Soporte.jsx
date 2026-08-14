import React from "react";
import '../styles/soporte.css'
import Boton from "../componentes/Boton";
import { Link } from "react-router-dom";
export function Soporte(){
    return(
    <main>
    <h1>Soporte</h1>
    <p>Reporta Aqui Abajo👇</p>
    <form>
    <h2>Complete y cuentenos su problema</h2>
    <label>
    <input type="text"></input>
    </label>
    </form>
    <nav>
    <Link to="/">Inicio</Link>
    </nav>
    </main>
    );
}