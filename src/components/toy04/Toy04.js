import React from "react"
import "./Toy04.css"

const Toy04 = () => {
  return(
    <div>
      <a className="btn">Subscribe Us</a>
      <div id="popup">
        <div className="content">
          <img src=""></img>
          <h2>Join Our Newsletter</h2>
          <p>
            Lorem, ipsum....dolor..sit amet...
            show me the money
          </p>
          <div className="inputBox">
            <input type="email" placeholder="Enter Email"></input>
          </div>
          <div className="inputBox">
            <input type="submit" value="Sign Up"></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toy04