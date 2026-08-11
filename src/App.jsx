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

  const [showAll, setShowAll] = useState(false)

  const [flashLight,setFlashLight]= useState(false)

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
  
  const readingTime = Math.ceil(word / 200)

  const cleanText = text.toLowerCase().replace(/[^a-záéúóíÜ]/g,"")

  const dictionaryLetters = {}

  cleanText.split("").forEach(letter =>{
   dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1    
  });

  const total = cleanText.length;

  const letters = Object.entries(dictionaryLetters).map(dataLetter => {
   const letter = dataLetter[0]
   const amountLetter = dataLetter[1]

   const infoRenderLetter = {
    letterName: letter,
    amount: amountLetter,
    porcentaje: (amountLetter / total) * 100
   }
   return infoRenderLetter
  })

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)

  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 4)

  const color = flashLight ? '#ffffff' : '#0d0b11'

  return(
    <>
    <Header />
    <Titulo />
    <Boton flashLight={flashLight}setFlashLight={setFlashLight}/>
    <Textarea text={text} setText={setText} handleChangeTextarea={handleChangeTextarea}/>
    <Checkbox  excludeSpaces={excludeSpaces} setExcludeSpaces={setExcludeSpaces} limitCharacter={limitCharacter} setlimitCharacter={setlimitCharacter} limitNumber={limitNumber} setlimitNumber={setlimitNumber} readingTime={readingTime} />
    <Cuadros text={text} characters={characters} word={word} oraciones={oraciones}/>
    <Porcentaje letters={letters} sortLetters={sortLetters} showAll={showAll} setShowAll={setShowAll} visibleLetters={visibleLetters}/>
    </>
  )
}

export default App
