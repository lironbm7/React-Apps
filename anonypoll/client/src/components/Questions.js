import React, { useEffect, useState } from 'react'
import data from '../database/data'

// Redux store import
import { useSelector } from 'react-redux'

export default function Questions() {

  const state = useSelector(state => state)

  useEffect(() => {
    console.log(state);
  })

  const [ checked, setChecked ] = useState(undefined)

  const question = data[0];

  useEffect(() => {
  }, [])
  
  function onSelect() {
  }

  return (
    <div className='questions'>
      <h2 className='text-light'>Question Placeholder 1</h2>

      <ul key={question.id}>
        {
          question.options.map((q, i) => (
            <li>
              <input 
              type='radio'
              value={false}
              name='options' 
              id={`q${i}-option`} 
              onChange={onSelect()} 
              />

              <label htmlFor={`q${i}-option`}>{q}</label>
              <div className='check checked'></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
