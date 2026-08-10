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

  const [excludeSpaces, setExcludeSpaces] = useState(false);

  const [limitCharacter,setlimitCharacter] = useState(false)

  const [limitNumber,setlimitNumber] = useState(300)

  const handleChangeTextarea=(e)=>{
  if(limitCharacter){
  if(e.target.value.length <= limitNumber){
  setText(e.target.value)
  }}
  else{
  setText(e.target.value)
  }
}
  const word=text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const oraciones=text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length;
  return(
    <>
    <Header />
    <Titulo />
    <Boton />
    <Textarea text={text} setText={setText} handleChangeTextarea={handleChangeTextarea}/>
    <Checkbox  excludeSpaces={excludeSpaces} setExcludeSpaces={setExcludeSpaces} limitCharacter={limitCharacter} setlimitCharacter={setlimitCharacter} limitNumber={limitNumber} setlimitNumber={setlimitNumber} />
    <Cuadros text={text} characters={characters} word={word} oraciones={oraciones}/>
    <Porcentaje />
    </>
  )
}

export default App
