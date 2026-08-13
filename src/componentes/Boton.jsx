import { useState } from 'react'
import '../styles/boton.css'
import logoClaro from '../assets/logoClaro.jpg'
import logoOscuro from '../assets/Logo.png'

function Boton({flashLight,setFlashLight,color}){

const tocarClick = () => {
const textarea = document.querySelector('textarea')
const botones = document.querySelectorAll('button')
const logo = document.querySelector('img')

setFlashLight(!flashLight)
if(!flashLight){
document.body.style.backgroundColor = '#ffffff';
document.body.style.color = '#000000';
logo.src = logoClaro;
textarea.style.backgroundColor = '#cfcfcf';
textarea.style.color = '#000000';
textarea.style.border='solid #ebeaea';
botones.forEach((boton) =>{
boton.style.backgroundColor = '#ffffff';
boton.style.color = '#000000';
})
}
else{
document.body.style.backgroundColor = '#0d0b11';
document.body.style.color ='aliceblue';
logo.src = logoOscuro;
textarea.style.backgroundColor='#181818';
textarea.style.color='#ffffff';
textarea.style.border='1px solid #8d8c8c';
botones.forEach((boton)=>{
boton.style.backgroundColor = '#0d0b11';
boton.style.color = '#ffffff';
})
}}

 return(
<div className='contenedorBoton'>
 <button className='boton' onClick={()=>tocarClick(!flashLight)}>☼</button>
</div>
)
}
export default Boton