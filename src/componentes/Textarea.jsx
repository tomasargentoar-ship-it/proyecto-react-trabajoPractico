import '../styles/textarea.css'
import { useState } from 'react'
function Textarea({text,setText}){
return(
<div className='sectionTextarea'>
<textarea className='textarea' placeholder="Escribe tu texto aqui..." onChange={(e)=>setText(e.target.value)}></textarea>

</div>
)}
export default Textarea