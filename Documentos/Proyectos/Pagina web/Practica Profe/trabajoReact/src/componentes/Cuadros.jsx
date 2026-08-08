import { useState } from 'react'
import '../styles/cuadros.css'
import fondosrosa from '../assets/fondosrosa.png'
import naranjacorrecto from '../assets/naranjacorrecto.jpg'
import rogiso from '../assets/rogiso.jpg'


function Cuadros(){
 return(
<section className='sectionCuadros'>
<div className='Cuadro1'>
<h1 className='numero'>278</h1>
<h2 className='texto'>Total Characters</h2>    
</div>
<div className='Cuadro2'>
<h1 className='numero'>39</h1>
<h2 className='texto'>Word Count</h2>
</div>
<div className='Cuadro3'>
<h1 className='numero'>04</h1>
<h2 className='texto'>Sentence Count</h2>  
</div>
</section>
 )
}
export default Cuadros