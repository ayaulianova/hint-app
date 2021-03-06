import React, { useState } from 'react'
import listOfPatterns from '../../constants/listOfPatterns'
import './List.css'

export default function List() {
    const [active, setActive] = useState(0)

    return(
      <ul>
        {listOfPatterns.map((i, index) => 
          <li key={index} className={active ? "active" : ''} onClick={() => setActive(index)}>
            {i.toString()}
          </li>
        )}
      </ul>
    )
  }
