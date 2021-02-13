import React, { useState, useEffect, useLayoutEffect } from 'react'
import './Description.scss'

function Description() {
  const { descriptions } = this.props  

  return(
    <div>
      <h1>{descriptions.title}</h1>
      <p>{descriptions.text}</p>  
    </div>
  )
}

export default Description