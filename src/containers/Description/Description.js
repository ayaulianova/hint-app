import React from 'react'
import './Description.scss'

export default function Description() {
  const { descriptions } = this.props  

  return(
    <div>
      <h1>{descriptions.title}</h1>
      <p>{descriptions.text}</p>  
    </div>
  )
}
