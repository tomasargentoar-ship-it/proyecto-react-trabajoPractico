import { useState } from 'react'
import '../styles/cuadros.css'
import fondosrosa from '../assets/fondosrosa.png'
import naranjacorrecto from '../assets/naranjacorrecto.jpg'
import rogiso from '../assets/rogiso.jpg'


function Cuadros({text,characters,word,oraciones}){
 return(
<section className='sectionCuadros'>
<div className='Cuadro1'>
<h1 className='numero'>{characters}</h1>
<h2 className='texto'>Total Characters</h2>    
</div>
<div className='Cuadro2'>
<h1 className='numero'>{word}</h1>
<h2 className='texto'>Word Count</h2>
</div>
<div className='Cuadro3'>
<h1 className='numero'>{oraciones}</h1>
<h2 className='texto'>Sentence Count</h2>  
</div>
</section>
 )
}
export default Cuadros