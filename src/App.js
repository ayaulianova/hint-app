import React from 'react'
import List from './components/List/List'
import Description from './components/Description/Description'
import descriptions from './descriptions'
import './App.css'

function App() {

  return (
    <div className="App">
      <List />
      <Description descriptions={descriptions} />
    </div>
  )
}

export default App
