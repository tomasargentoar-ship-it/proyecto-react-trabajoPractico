import '../styles/textarea.css'
import { useState } from 'react'
function Textarea({text,setText,handleChangeTextarea}){
return(
<div className='sectionTextarea'>
<textarea className='textarea' placeholder="Escribe tu texto aqui..." value={text} onChange={handleChangeTextarea}></textarea>
</div>
)}
export default Textarea