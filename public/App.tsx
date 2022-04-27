import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

export function App(props:any) {
  const [count, setCount] = useState(10)
  console.log(props.name)
  return (
    <div className="App">
      <h1>Hello world !</h1>
    </div>
  )
}

export default App
