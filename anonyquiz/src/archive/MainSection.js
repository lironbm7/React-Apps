import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MainSection() {
  return (
    <div className="container">
      <header className="jumbotron">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">
          This is my project portfolio page, where you can learn more about my
          work and see examples of my projects.
        </p>
        <hr className="my-4" />
        <p>
          Click on the links above to learn more about me and my projects, or
          contact me to learn more.
        </p>
      </header>
    </div>
  );
}

export default MainSection;

