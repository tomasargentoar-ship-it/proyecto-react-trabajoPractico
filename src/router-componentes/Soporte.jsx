import React from "react";
import { useEffect } from "react";
import '../styles/soporte.css'
import Boton from "../componentes/Boton";
import { Link } from "react-router-dom";
import logoNegro from '../assets/Logo.png'
import logoBlanco from '../assets/logoClaro.jpg'

export function Soporte({flashLight,setFlashLight,nombreArchivo,setNombreArchivo}){
    
   const cambio = ()=>{
   setFlashLight(!flashLight)
   }
   

   useEffect(()=>{

   const imagen = document.querySelector('img')

   const boton = document.querySelectorAll('button')

   const link = document.querySelector('a')

   const text = document.querySelector('textarea')

   const inputs = document.querySelectorAll('input')

   if(!flashLight){
   document.body.style.backgroundColor = '#ffffff'
   
   document.body.style.color = '#000000'
   
   imagen.src = logoBlanco;
   
   link.style.color = '#000000'

   text.style.backgroundColor = '#e9e7e7'

   text.style.color = '#000000'

   text.style.border = '1px solid #aaaaaa'

   inputs.forEach((input)=>{
   input.style.backgroundColor = '#e9e7e7'
   input.style.color = '#000000'
   input.style.border = '1px solid #aaaaaa'
   })
   boton.forEach((botton)=>{
   botton.style.color = '#000000'
   botton.style.backgroundColor ='#ffffff'
   })

   } 
   else{
   document.body.style.backgroundColor = '#0d0b11'
   
   document.body.style.color = '#ffffff'
   
   imagen.src = logoNegro;
   
   link.style.color = '#ffffff'

   text.style.backgroundColor = '#181818'

   text.style.color = '#ffffff'

   text.style.border = '1px solid #8d8c8c'

   inputs.forEach((input)=>{
   input.style.backgroundColor = '#181818'
   input.style.color = '#ffffff'
   input.style.border = '1px solid #8d8c8c'
   })
   boton.forEach((botton)=>{
   botton.style.color = '#ffffff'
   botton.style.backgroundColor ='#0d0b11'
   })
   }
},[flashLight])
   
   const cambiarArchivo = (e)=> {
    if(e.target.files.length > 0){
    setNombreArchivo(e.target.files[0].name)
    }
   }

    return(
    <main>
    
    <section className="sectionImg">
    <img src={logoNegro} alt="Logo" className="soporteLogo"/>
    <h3 className="suporTitulo">Character Counter</h3>
    </section>
   

    <section className="sectionBotom">
    <button className="botonSoporte" onClick={cambio}>☼</button>
    </section>

    <section className="Titulo">
    <h1>Soporte</h1>
    </section>
    

    <form className="sectionForm">

    <h2>Complete y cuentenos su problema</h2>

    <div className="sectionLabel">

    <div>
    <label>
    <input className='input' type="text" placeholder="Ingrese su Nombre y Apellido"></input>
    </label>
    </div>

    <div>
    <label>
    <input  className='input' type="email" placeholder="Ingrese su Gmail"></input>
    </label>
    </div>

    <div className="divTextarea">
    <textarea className='soporteTextarea' placeholder="Informe su Problema"></textarea>
    </div>

    <div>
    <input onChange={cambiarArchivo} className='input' id="archivos" type="file" style={{display:'none'}}></input>
    
    <label htmlFor="archivos" className="seleccionarArchivos">
    Subir archivo 📁
    </label>
    <p>{nombreArchivo}</p>
    </div>
    </div>

    <button type='submit' className="boton-Enviar">Enviar</button>

    </form>

    <nav className="navlink">
    <Link to="/" className="link">Inicio</Link>
    </nav>

    </main>
    );
}