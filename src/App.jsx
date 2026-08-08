import { useState } from 'react'
import './styles/App.css'
import Header from './componentes/Header.jsx'
import Titulo from './componentes/Titulo.jsx'
import Boton from './componentes/Boton.jsx'
import Textarea from './componentes/Textarea.jsx'
import Checkbox from './componentes/Checkbox.jsx'
import Cuadros from './componentes/Cuadros.jsx'
import Porcentaje from './componentes/Porcentaje.jsx'

function App() {
  const [text, setText] = useState("");
  return(
    <>
    <Header />
    <Titulo />
    <Boton />
    <Textarea text={text} setText={setText}/>
    <Checkbox />
    <Cuadros text={text}/>
    <Porcentaje />
    </>
  )
}

export default App
