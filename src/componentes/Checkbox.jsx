import { useState } from 'react'
import '../styles/checkbox.css'
function Checkbox({excludeSpaces,setExcludeSpaces,limitCharacter,setlimitCharacter,limitNumber,setlimitNumber}){
    return(
    <div className='sectionCheckbox'>
     <label>
     <input type="checkbox" className='checkbox' checked={excludeSpaces} onChange={()=>setExcludeSpaces(!excludeSpaces)}/>
     Exclude Spaces
     </label>
     <label>
     <input type="checkbox" className="checkbox" checked={limitCharacter} onChange={()=>setlimitCharacter(!limitCharacter)}/>
     Set Character Limit
     </label>{
    limitCharacter && <input type='number' className='inputNumber' value={limitNumber} onChange={(e)=> setlimitNumber(e.target.value)}/>
     }
     <h4 className='tiempo'>Approx.reading time: 1minute</h4>
     </div>
    )
}
export default Checkbox