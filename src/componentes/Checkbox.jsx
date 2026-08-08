import { useState } from 'react'
import '../styles/checkbox.css'
function Checkbox(){
    return(
    <div className='sectionCheckbox'>
     <label>Exclude Spaces
     <input type="checkbox" className='checkbox'/>
     </label>
     <label>Set Character Limit
     <input type="checkbox" className="checkbox"/>
     </label>
     <h4 className='tiempo'>Approx.reading time: 1minute</h4>
     </div>
    )
}
export default Checkbox