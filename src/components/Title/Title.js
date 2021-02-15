import React from 'react'

export default function Title() {
  const { descriptions } = this.props

  return (
    <h3>{descriptions ? `${descriptions.title}` : `Пример кода`}</h3>
  )
}