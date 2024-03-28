import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import FlagContainer from './components/FlagContainer'
import DishContainer from './components/DishContainer'
function App() {


  return (
    <>
      <Hero/>
      <FlagContainer/>
      <DishContainer/>
    </>
  )
}

export default App
