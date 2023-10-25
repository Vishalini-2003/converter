import React,{useState} from 'react'
import './Signin.css';
import {auth} from "./FirebaseConfig"

import { signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
//import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate();

var Name="";
function Signin(){
  const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    function handleSubmit (event) {
        console.log(email)
        Name=email
        event.preventDefault();
        signInWithEmailAndPassword(auth,email, Password)
          .then(() => {
            alert('Successfully logged in!');
            //navigate("/");
          })
          .catch((error) => {
            alert(error);
          });
      };

      const handlecreateSubmit = async (e) => {
        console.log(email)
        Name=email
        e.preventDefault();
        try {
          createUserWithEmailAndPassword(auth,email, Password);
          setEmail(email);
          setPassword(Password);
          alert("User added");
        } catch (error) {
          alert(error);
        }
      };

    return (
        <div className="box1">
            <h1 className="login">Login</h1>
            <input type="text" className="box" placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            <br />
            <input type="Password" className="box" placeholder="" onChange={e => setPassword(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit} >submit</button>
            <button onClick={handlecreateSubmit} >Create Account</button>
        </div>        
    )
}

export default Signin
export {Name}