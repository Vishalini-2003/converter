import React, { useState,useEffect } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Name } from "./page/Signin";




function Navbar(){
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setData(Name);
    };

    fetchData(); 

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 2 minutes
    }, 1200);

    return () => clearInterval(intervalId);
  }, []);
  

    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <nav>
      <Link to="/" className="title">
        Converter
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          {Name?(<NavLink to="/convert">{Name}</NavLink>):(<NavLink to="signin">Signin</NavLink>)}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
