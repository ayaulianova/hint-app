import React from 'react'
import descriptions from './constants/descriptions'
import './Description.css'

export default function Description() {  

  return(
    <div>
      <Title descriptions={descriptions} />
      <Text descriptions={descriptions} /> 
    </div>
  )
}
