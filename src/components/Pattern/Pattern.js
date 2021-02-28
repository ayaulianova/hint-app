import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import './Pattern.css'

export default function Pattern(props) {
  return(
    <li>
      {props.value}  
    </li>
=======

export default function Pattern(props) {
  return(
    <div>
      {props.value}  
    </div>
>>>>>>> 6cf622d81c13be5d9aa8b51277097afba072e8dd
  )
}

Pattern.propTypes = {
    value: PropTypes.string
}