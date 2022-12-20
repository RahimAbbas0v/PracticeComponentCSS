import React from 'react'
import "./Header.css";
function Header() {
  return (
    <div><header>
    <nav>
      <div className="navbar">
        <div className="heading">
          <h3>Start Bootstrap</h3>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="center">
      <h1>
        Your Favorite Place for Free <br />
        Bootstrap Themes
      </h1>
      <hr />
      <p>
        Start Bootstrap can help you build better websites using the
        Bootstrap framework! Just <br /> download a theme and start
        customizing, no strings attached!
      </p>
      <button>FIND OUT MORE</button>
    </div>
  </header></div>
  )
}

export default Header