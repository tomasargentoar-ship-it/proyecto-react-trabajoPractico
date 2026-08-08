import { useState } from 'react'
import '../styles/checkbox.css'
function Checkbox(){
    return(
    <div className='sectionCheckbox'>
     <label>
     <input type="checkbox" className='checkbox'/>
     Exclude Spaces
     </label>
     <label>
     <input type="checkbox" className="checkbox"/>
     Set Character Limit
     </label>
     <h4 className='tiempo'>Approx.reading time: 1minute</h4>
     </div>
    )
}
export default Checkbox