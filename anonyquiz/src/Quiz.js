import React from 'react';
import './Quiz.css';

function Quiz() {
  return (
    <div>
      <h1>Anonymous Quiz</h1>
      <p>What is the capital of France?</p>
      <form>
        <label>
          <input type="radio" name="answer" value="1" />
          Paris
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="2" />
          Berlin
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="3" />
          Rome
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="4" />
          London
        </label>
        <br />
        <label>
          <input type="radio" name="answer" value="5" />
          Madrid
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Quiz;