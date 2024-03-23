import axios from 'axios'
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import './Login.css'
import {  toast } from 'react-toastify';
function Login() {
 
  const [email,setEmail]= useState()
  const [password,setPassword]= useState()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin =()=>{
    axios.post('http://localhost:3000/login',{email,password})
    .then(result =>{
      toast("login successfull")
      setTimeout(()=> {
        if(result.data === "Sucess" ){
          navigate('/dashboard')
        }
      },500)
 
    })
    .catch(err => console.log(err)) 
  }

  // const handleLogin = async (data) => {
  //   try {
  //     const result = await axios.post('http://localhost:3000/login', data);
  //     if (result.data === "Sucess") {
  //       navigate('/home');
        
  //     }
  //     console.log(result)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className='Login'>
       <div className="logincontainers">
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="logincontainerforms">
        <h2>Account Login</h2>
      <div className="details">
        

        <div className='Use'> 
          <input type = "email"  {...register("email", {required: true})}  placeholder='Enter Email'
          
          /> 
                     {errors.email && <p className='error'> Enter Email  </p>}      
        </div>
        
        <div className='Use'>
          <input type = "password" {...register("password", {required: true})} placeholder='Password'
          
          />
                     {errors.password && <p className='error'> Enter Password </p>}
        </div>
       
      </div>
      <div className="sign" style={{marginTop: '20px'}}>
        <button className='button-submit' type='submit'>Sign in</button>
      </div>
     
      </div>
    
    </form>

    </div>
    </div> 
  )
}

export default Login;
