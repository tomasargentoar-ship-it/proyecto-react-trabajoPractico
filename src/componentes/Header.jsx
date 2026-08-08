import '../styles/header.css';
import { useState } from 'react'
import Logo from '../assets/Logo.png'

function Header(){
return(
 <div className="sectionHeader">
 <img className="logo" src={Logo} alt="Logo" />
 <h3 className="nombre">Character Counter</h3>
 </div>
 )
}
export default Header