import React from "react";
import '../styles/normas.css'
import { Link } from "react-router-dom";
export function Normas(){
 return(
<main className="sectionNormas">
<h1>Normativas</h1>
<section className="normativas">
<h2>Normas a Cumplir</h2>
<p>Por favor, leé atentamente las pautas antes de usar el analizador de texto:</p>
<ol className="lista">
<li>
<strong>Respeto y contenido adecuado:</strong> No ingreses textos con lenguaje de odio, discriminación o contenido explícito.
</li>
<li>
<strong>Uso de la herramienta:</strong>El analizador está diseñado para textos en texto plano. Evitá pegar código o caracteres de control raros.
</li>
<li>
<strong>Privacidad:</strong>Los textos procesados se analizan de manera local y no quedan guardados en ningún servidor externo.
</li>
<li>
<strong>Limite de caracteres:</strong>Respeta los límites del contador para asegurar un procesamiento fluido.
</li>
</ol>
</section>
<section>
<h3>¿Preguntas Frecuentes o Sugerencias?</h3>
<p>Si encontrás algún error en las métricas, podés reportarlo en el canal de soporte.</p>
</section>
<nav>
<Link to="/">Inicio</Link>
</nav>
</main>
 );
}