import './styles.css';
import React from "react";
import Header from "./Header";
import Quiz from './Quiz';
import './App.css';

function App() {
  return (
    <div className="projects">
      <Header />
      <Quiz />
      <footer className="container">
        <p>Copyright 2022</p>
      </footer>

  </div>
  )
}

export default App;
