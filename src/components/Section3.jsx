import React from 'react'
import "./Section3.css";
import { FaSpotify } from "react-icons/fa";

function Section3() {
  return (
    <section>
        <div className="services">
          <h1>At Your Service</h1>
          <hr />
          <div className="cards">
            <div className="card1">
              <i>
                <FaSpotify />
              </i>
              <h3>Sturdy Themes</h3>
              <p>
                Our themes are updated regularly <br /> to keep them bug free!
              </p>
            </div>
            <div className="card1">
              <i>
                <FaSpotify />
              </i>
              <h3>Sturdy Themes</h3>
              <p>
                Our themes are updated regularly <br /> to keep them bug free!
              </p>
            </div>
            <div className="card1">
              <i>
                <FaSpotify />
              </i>
              <h3>Sturdy Themes</h3>
              <p>
                Our themes are updated regularly <br /> to keep them bug free!
              </p>
            </div>
            <div className="card1">
              <i>
                <FaSpotify />
              </i>
              <h3>Sturdy Themes</h3>
              <p>
                Our themes are updated regularly <br /> to keep them bug free!
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Section3