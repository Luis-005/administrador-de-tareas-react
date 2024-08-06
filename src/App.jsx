import React from 'react'
import { Home } from './components/Pages/Home/Home'
import { Contenx } from './components/Context/Context'

function App() {

  return (
    <Contenx>
       <Home />
    </Contenx>
  )
}

export default App 
