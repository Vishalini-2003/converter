import React from 'react'
import { useState } from 'react';
import './App.css';
//import './Style.css';
function Signin() {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [info, setInfo] = useState('user1');
    return (

        <div>
            
<span style={{'-i': 0}} />
        <span style={{'-i': 1}} />
        <span style={{'-i': 2}} />
        <span style={{'-i': 3}} />
        <span style={{'-i': 4}} />
        <span style={{'-i': 5}} />
        <span style={{'-i': 6}} />
        <span style={{'-i': 7}} />
        <span style={{'-i': 8}} />
        <span style={{'-i': 9}} />
        <span style={{'-i': 10}} />
        <span style={{-i: 11}} />
        <span style={{-i: 12}} />
        <span style={{-i: 13}} />
        <span style={{-i: 14}} />
            <div className="box1">
                <h1 class="login">Login</h1>
                <input type="text" className="box" placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <br />
                <input type="Password" className="box" placeholder="" onChange={e => setPassword(e.target.value)} />
                <br />
                <br />
                <button onClick={e => setInfo(email)} >submit</button>
                <button onClick={e => setInfo(email)} >Create Account</button>
            </div>
        </div>
    )
}

export default Signin