import React from 'react'
import descriptions from './constants/descriptions'
import './Description.css'

export default function Description() {  

  return(
    <div>
      <Title title={descriptions.title} />
      <Text text={descriptions.text} /> 
    </div>
  )
}
