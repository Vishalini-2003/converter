import React,{useState} from 'react'
import './Signin.css';
var Name="";
function Signin(){
  const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    function update(){
        console.log(email)
        Name=email
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

export default Signin
export {Name}