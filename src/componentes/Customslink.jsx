import {Link } from "react-router-dom"
import { useState } from "react"
import '../styles/customsLink.css'

export function Customslink(){
   return(
   <nav className="navLink">
    <Link className="soporte" to="/soporte?mensaje=Tengo%20un%20error%20en%20la%20pagina">Soporte</Link>
    <Link className="normas" to="/normas">Normas de la Comunidad</Link>
   </nav>
   )
}
