import React from 'react'

export default function Title() {
  const { title } = this.props

  return (
    <h3>{title ? `${title}` : `Пример кода`}</h3>
  )
}