import React from 'react'
import List from './containers/List/List'
import Description from './containers/Description/Description'
import descriptions from './constants/descriptions'
import './App.css'

export default function App() {

  return (
    <div className="App">
      <List />
      <Description descriptions={descriptions} />
    </div>
  )
}
