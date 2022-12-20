import "./Footer.css";
import React, { useState } from 'react'
import { Button } from "reactstrap";
import { FaPhoneSquare } from "react-icons/fa";
function Footer() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState([])
  const [message, setMessage] = useState([])
  const handlechange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handlechange2 = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlechange3 = (e) => {
    e.preventDefault()
    setNumber(e.target.value)
  }
  const handlechange4 = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    if (name=="") {
      alert("Enter Name")
    }
    if (email=="") {
      alert("Enter Email")
    }
    if (message=="") {
      alert("Enter Message")
    }
    if (number=="") {
      alert("Enter Number")
    }
    setName("")
    setEmail("")
    setMessage("")
    setNumber("")
  }
  return (
    <section>
      <div className="forms">
        <div className="heading">
          <h1>Let's Get In Touch!</h1>
          <hr />
          <p>
            Ready to start your next project with us? Send us a messages and we
            will get back to you as soon as possible!
          </p>
        </div>

        <div className="inputs">
          <div class="form-group">
            <form action="">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Full name"
                onChange={handlechange}
              />
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
                onChange={handlechange2}
              />
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Phone number"
                onChange={handlechange3}
              />
              <input
                type="text"
                class="form-control"
                id="message"
                placeholder="Message"
                onChange={handlechange4}
              />
              <input
                type="submit"
                class="form-control"
                id="submit"
                value="Submit"
                placeholder="Message"
                onClick={handlesubmit}
              />
            </form>
          </div>
        </div>
        <div className="phone">
          <i>
            <FaPhoneSquare />
          </i>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
        <div className="final">
          <p>Copyright © 2022 - Company Name</p>
        </div>
    </section>
  );
}

export default Footer;
