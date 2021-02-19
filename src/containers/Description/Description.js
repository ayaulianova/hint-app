import React from 'react'
import Title from '../../components/Title/Title'
import Text from '../../components/Text/Text'
import descriptions from '../../_constants/descriptions'
import './Description.css'

export default function Description() {  

  return(
    <div>
      <Title title={descriptions.title} />
      <Text text={descriptions.text} /> 
    </div>
  )
}
