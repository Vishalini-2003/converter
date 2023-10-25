import React from 'react'
import './Foot.css'

function Foot() {
  return (
    <>
          <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Footer - Sagar Developer</title>
  <link
    rel="stylesheet"
    href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
  />
  <link
    href="http://fonts.googleapis.com/css?family=Cookie"
    rel="stylesheet"
    type="text/css"
  />
  <link rel="stylesheet" href="style.css" />
  <header>
    <h2>
      Responsive <span>Footer</span>{" "}
    </h2>
  </header>
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>
        LINDR<span>Converter</span>
      </h3>
      <p className="footer-links">
        <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>|
        <a href="#">Blog</a>
      </p>
      <p className="footer-company-name">
        Copyright © 2021 <strong>LINDRConverter</strong> All rights reserved
      </p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p>
          <span>Ghaziabad</span>
          Delhi
        </p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>+91 74**9**258</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p>
          <a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a>
        </p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        <strong>Sagar Developer</strong> is a Youtube channel where you can find
        more creative CSS Animations and Effects along with HTML, JavaScript and
        Projects using C/C++.
      </p>
      <div className="footer-icons">
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-youtube" />
        </a>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Foot