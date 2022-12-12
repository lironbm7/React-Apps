import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'

export default function Result() {

  function onRestart(){
    console.log('Restart')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Anonymous Polls</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>Placeholder</span>
        </div>
        <div className='flex'>
          {/* <span>Polls participated in:</span> */}
          <span>Total Quiz Points:</span>
          <span className='bold'>23</span>
        </div>
        <div className='flex'>
          {/* <span>Polls created:</span> */}
          <span>Total questions:</span>
          <span className='bold'>5</span>
        </div>
        <div className='flex'>
          <span>Total attempts:</span>
          <span className='bold'>3</span>
        </div>
        <div className='flex'>
          <span>Quiz result:</span>
          <span className='bold'>Passed</span>
        </div>
      </div>

      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        
        <ResultTable />
      </div>
    </div>
  )
}
