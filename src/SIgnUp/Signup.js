import React, { useState } from 'react'
import './Signup.css'
import { Link,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Signup() {
  const [name,setName]= useState()
  const [email,setEmail]= useState()
  const [password,setPassword]= useState()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin =()=>{
    // e.preventDefault();
    axios.post('http://localhost:3000/register',{name,email,password})
    .then(result =>{  toast("Registration successfull")})
    .catch(err => console.log(err))
    navigate('/login')
 
  }
  return (
    <div className='Login'>
       <div className="logincontainer">
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="logincontainerform">
        <h2>Account Registration</h2>
      <div className="details">
        <div className='Use'> 
          <input type = "text"  {...register("text", {required: true})} placeholder='User Name'
            onChange={(e)=> setName(e.target.value)}
          />   
                     {errors.text && <p className='error'> UserName is required.</p>}     
        </div>

        <div className='Use'> 
          <input type = "email" {...register("email", {required: true})}  placeholder='Enter Email'
          // onChange={(e)=> setEmail(e.target.value)}
          /> 
           {errors.email && <p className='error'> Email is required.</p>}     
        </div>
        
        <div className='Use'>
          <input type = "password"  {...register("password", {required: true})} placeholder='Password' 
             // onChange={(e)=> setPassword(e.target.value)}
          />
            {errors.password && <p className='error'> Password is required.</p>}
        </div>
       
        <div className="sign">
        <button className='button-submit' type='submit'>Register</button>
      </div>
      <div className="fu">
        <p>Already Have an Account?</p>
      </div>
        <Link to ="/login" className='login'>Login</Link>
      </div>
    
      </div>
    
    </form>

    </div>
    </div> 
  
  )
}

export default Signup;

