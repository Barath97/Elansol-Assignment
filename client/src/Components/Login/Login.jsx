 import React, { useState } from 'react'
 import './Login.css'
 import email_icon from '../Assets/email.png';
 import password_icon from '../Assets/padlock.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
 
 const Login = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  axios.defaults.withCredentials = true;   //for vercel deploy
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://deploy-mern-api-umber.vercel.app/login', { email, password })
      .then(result => {
        console.log(result.data);
        if (result.data === "Success") {
          console.log(result);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
          }).then(() => {
            // we can navigate to Elansol Home page
            navigate('/home'); 
          });
        }else {
          Swal.fire({
            icon: 'error',
            title: 'Oops... Incorrect Email or Password',
          });
        }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Invalid User',
        });
        console.error(err.message);
      });
  }

   return (
     <div>
        <div className="container">
          <form action="" id="form" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
              <div className="input-group">
                <img src={email_icon} alt="" />
                <input type="email" id="email" name="email" placeholder='Email' 
                       onChange={(e) => setEmail(e.target.value)} required />              
              </div>
              <div className="input-group">
                <img src={password_icon} alt="" />
                <input type="password" id="password" name="password" placeholder='Password'
                         onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <button type="submit">Sign In</button>
          </form>
    </div>
     </div>
   )
 }
 
 export default Login