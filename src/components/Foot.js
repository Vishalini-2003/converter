import React from 'react'
import './Foot.css'

function Foot() {
  return (
    <>
          
  
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
          <a href="mailto:dharun.qwerty@gmail.com">xyz@gmail.com</a>
        </p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        <strong>LINDR converter</strong> is a website where you can convert scanned images into readable text.
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