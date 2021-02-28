import React from 'react'
import PropTypes from 'prop-types'
import './Pattern.css'

export default function Pattern(props) {
  return(
    <li>
      {props.value}  
    </li>
  )
}

Pattern.propTypes = {
    value: PropTypes.string
}