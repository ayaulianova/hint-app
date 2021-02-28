import React from 'react'
import PropTypes from 'prop-types'

export default function Pattern(props) {
  return(
    <div>
      {props.value}  
    </div>
  )
}

Pattern.propTypes = {
    value: PropTypes.string
}