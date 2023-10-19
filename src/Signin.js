import React from 'react'
import { useState } from 'react';

import './App.css';
var Name="";
function Signin() {

    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [info, setInfo] = useState('user1');
    function update(){
        setInfo(email);
        Name=info;
        console.log(info)
    }
    return (
        <div className="box1">
            <h1 className="login">Login</h1>
            <input type="text" className="box" placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            <br />
            <input type="Password" className="box" placeholder="" onChange={e => setPassword(e.target.value)} />
            <br />
            <br />
            <button onClick={update} >submit</button>
            <button onClick={update} >Create Account</button>
        </div>
        
    )
}
export {Name}
export default Signin


