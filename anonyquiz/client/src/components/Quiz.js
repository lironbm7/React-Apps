import React from 'react'
import Questions from './Questions'

export default function Quiz() {
  
  function onNext() {
    console.log('Next')
  }

  function onPrev() {
    console.log('Previous')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Anonymous Polls</h1>

      {/* Question Display */}
      <Questions />
      
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Previous</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
