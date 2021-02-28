import React from 'react'
import { listOfPatterns } from '../../constants/listOfPatterns'
import Pattern from '../../components/Pattern/Pattern'
import './List.css'

export default function List() {
    // const [active, setActive] = useState(0)

    return(
      <ul>
        {listOfPatterns.map((i, index) => <Pattern key={index} value={i}/>
          // className={active} onClick={() => setActive(i)}>
        )}
      </ul>
    )
  }


  