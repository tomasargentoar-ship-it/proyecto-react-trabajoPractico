import {Link } from "react-router-dom"
import { useState } from "react"
import '../styles/customsLink.css'

export function Customslink(){
   return(
   <nav className="navLink">
    <Link className="soporte" to="/soporte">Soporte</Link>
    <Link className="normas" to="/normas">Normas de la Comunidad</Link>
   </nav>
   )
}
