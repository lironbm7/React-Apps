import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Main() {

  const inputRef = useRef(null)

  return (
    <div className='container'>
      <h1 className='title text-light'>Anonymous Polls</h1>

      <ol>
        <li>Anonymous Polls will not disclose any personal information.</li>
        <li>Your personal information is NOT linked ANYWHERE to polls that you post.</li>
        <li>Participating is icognito and browsing / behavior data is not stored anywhere.</li>
        <li>The SFW Channel is intended for non-offensive content and uses AI censorship.</li>
        <li>The NSFW Channel has no rules and/or limitations.</li>
      </ol>

      <form id="form">
        <input ref={inputRef} type="text" placeholder='Username*'></input>
      </form>

      <div className="start">
        <Link className="btn" to={'quiz'}>Start Quiz</Link>
      </div>
    </div>
  )
}
