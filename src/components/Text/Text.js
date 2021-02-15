import React from 'react'

export default function Text() {
    const { descriptions } = this.props

    return(
        <p>{descriptions.text}</p>
    )
}