 import React, { useState } from 'react'
 import './Register.css';
 import name_icon from '../Assets/user.png';
 import email_icon from '../Assets/email.png';
 import password_icon from '../Assets/padlock.png';
 import dob_icon from '../Assets/date-of-birth.png';
 import { Link } from 'react-router-dom';
 import axios from 'axios';
 import Swal from 'sweetalert2';
 import { useNavigate } from 'react-router-dom';
 
 const Register = () => {

    const navigate = useNavigate();

    const [name, setName] =useState();
    const [email,setEmail] =useState();
    const [password, setPassword] =useState();
    const [date, setDate] = useState();
    
    axios.defaults.withCredentials = true;   //for vercel deploy
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://deploy-mern-api-umber.vercel.app/register',{name,email,password,date})
        .then(result => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Register Successfully",
                showConfirmButton: false
              }); 
              console.log(result);
              navigate('/login');
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops... Error occured'
              })
              console.log(err.message)
        })
    }

   return (
     <div>
         <div className="container">
                <form action="" id="form" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="input-group">
                        <img src={name_icon} alt="" />
                        <input type="text" id="userName" name="userName" placeholder='UserName'
                               onChange={(e) => setName(e.target.value)} required/>
                        
                    </div>
                    <div className="input-group">
                        <img src={email_icon} alt="" />
                        <input type="email" id="email" name="email" placeholder='Email' 
                               onChange={(e) => setEmail(e.target.value)} required/>
                        
                    </div>
                    <div className="input-group">
                        <img src={password_icon} alt="" />
                        <input type="password" id="password" name="password"  placeholder='Password' 
                                onChange={(e) => setPassword(e.target.value)} required/>
                        
                    </div>
                    <div className="input-group">
                        <img src={dob_icon} alt="" />
                        <input type="date" id="date" name="date" placeholder='DOB' 
                              onChange={(e) => setDate(e.target.value)} required/>
                        
                    </div>
                    
                    <button type="submit">Register</button>
                    Already registered? <Link to="/login">Sign In</Link>
                    
                </form>
            </div>
     </div>
   )
 }
 
 export default Register