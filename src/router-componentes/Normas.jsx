import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../styles/normas.css'
import { Link } from "react-router-dom";
import logoNegro from "../assets/Logo.png"
import logoBlanco from "../assets/logoClaro.jpg"


export function Normas({flashLight,setFlashLight}){
   const Click = ()=>{
   setFlashLight(!flashLight)
   
   }
    useEffect(()=>{

   

   const imagen = document.querySelector('img')

   const boton = document.querySelector('button')

   const link = document.querySelector('a')

   
   if(!flashLight){
   document.body.style.backgroundColor = '#ffffff'

   document.body.style.color = '#000000'

   imagen.src = logoBlanco;

   boton.style.color = '#000000'

   boton.style.backgroundColor ='#ffffff'

   link.style.color = '#000000'
   }
   else{
   document.body.style.backgroundColor = '#0d0b11'

   document.body.style.color = '#ffffff'

   imagen.src = logoNegro;

   boton.style.backgroundColor = '#0d0b11'

   boton.style.color = '#ffffff'

   link.style.color = '#ffffff'
   }

   },[flashLight])


 return(

<main>

<section className="sectionLogo">
<img className="logo" src={logoNegro} alt="Logo" />
<h3 className="nombre">Character Counter</h3>
</section>

<section className="sectionBoton">
<button className="botom"onClick={Click}>☼</button>
</section>

<section className="sectionTodo">

<h1>Normativas De La Comunidad</h1>

<section className="normativas">
<h2>Normas a Cumplir</h2>
<p>Por favor, leé atentamente las pautas antes de usar el analizador de texto:</p>
</section>

<ol className="listaNormas">

<div className="divNormas">
<li>
<strong>1.Respeto y contenido adecuado:</strong>No ingreses textos con lenguaje de odio, discriminación o contenido explícito.
</li>
</div>

<div className="divNormas">
<li>
<strong>2.Uso de la herramienta:</strong>El analizador está diseñado para textos en texto plano. Evitá pegar código o caracteres de control raros.
</li>
</div>

<div className="divNormas">
<li>
<strong>3.Privacidad:</strong>Los textos procesados se analizan de manera local y no quedan guardados en ningún servidor externo.
</li>
</div>

<div className="divNormas">
<li>
<strong>4.Limite de caracteres:</strong>Respeta los límites del contador para asegurar un procesamiento fluido.
</li>
</div>

</ol>

<section className="preguntasFrecuentes">
<h3>¿Preguntas Frecuentes o Sugerencias?</h3>
<p>Si encontrás algún error en las métricas, podés reportarlo en el canal de soporte.</p>
</section>

<ol className="listaPreguntas">

<div className="divNormas"> 
<li>
<strong>1.¿Es seguro pegar información sensible o privada?</strong>Sí, totalmente. El análisis de texto se procesa de manera 100% local en tu navegador. Ningún texto se envía ni se guarda en servidores externos.
</li>
</div>

<div className="divNormas">
<li>
<strong>2.¿El contador incluye espacios y saltos de línea?</strong>Podés elegir si querés contar o ignorar los espacios mediante la casilla de verificación (checkbox) en el panel principal.
</li>
</div>

<div className="divNormas">
<li>
<strong>3.¿Cuál es el límite máximo de caracteres?</strong>No hay un límite estricto, pero recomendamos textos de hasta 10.000 palabras para asegurar que las métricas y porcentajes se calculen de manera fluida y sin demoras.
</li>
</div>

<div className="divNormas">
<li>
<strong>4.¿Cómo funciona el cálculo de frecuencia de letras?</strong>La aplicación analiza la cantidad de veces que aparece cada letra en el texto introducido y te muestra los porcentajes de mayor a menor uso.
</li>
</div>

<div className="divNormas">
<li>
<strong>5.¿Qué hago si encuentro un error en las métricas?</strong>Podés reportarlo a través de nuestra sección de Soporte enviándonos un mensaje con el detalle del problema.
</li>
</div>

</ol>

<nav className="navInicio">
<Link to="/" className="link">Inicio</Link>
</nav>
</section>
</main>

 );
}