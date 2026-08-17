import { useState } from 'react'
import '../styles/porcentaje.css'

function Porcentaje({letters,sortLetters,showAll, setShowAll,visibleLetters}){
   return(
   <section className='sectionPorcentaje'>
    <div className='divTitulo'>
    <h2 className='titulo'>Letter Density</h2>
    <button className='boton' onClick={()=>setShowAll(!showAll)}>{showAll ? "See Less ▴" : "See More ▾"}</button>
    </div>
    
    <article>

  {visibleLetters.map(letter => (
   <div key={letter.letterName} className='porcentaje'>
    <span>{letter.letterName.toUpperCase()}</span>
    <div className="linea">
      <div className='lineAdentro' style={{ width: `${letter.porcentaje}%` }}></div>
    </div>
    <span>{letter.amount} ({letter.porcentaje.toFixed(2)}%)</span>
    </div>
    ))}

    </article>

   </section>
   )
}

export default Porcentaje