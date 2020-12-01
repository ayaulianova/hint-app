import React, { useState } from 'react'
import './list.scss'

const PATTERNS = [
    "Abstract Factory",
    "Builder",
    "Factory Method",
    "Prototype",
    "Singleton",
    "Adapter",
    "Bridge",
    "Composite",
    "Decorator",
    "Facade",
    "Flyweight",
    "Proxy",
    "Chain of responsibility",
    "Command",
    "Interpreter",
    "Iterator",
    "Mediator",
    "Memento",
    "Observer",
    "State",
    "Strategy",
    "Template method",
    "Visitor",
  ]
  
  function List() {
    const [active, setActive] = useState(0)

    return(
      <ul>
        {PATTERNS.map((i, index) => 
          <li key={index} className={active ? "active" : ''} onClick={() => setActive(index)}>
            {i.toString()}
          </li>
        )}
      </ul>
    )
  }

  export default List