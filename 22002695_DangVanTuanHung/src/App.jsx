import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  function inText(e){
    setText(e.target.value);
  }

  function Click(){
    setName(text);
  }


  return (
    <>
      <input onChange={inText} type="text" />

      <button onClick={Click}>Click</button>
      <br />
      <span>Hello  {name}</span>
    </>
  )
}

export default App
