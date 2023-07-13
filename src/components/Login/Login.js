import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo-colored.svg'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [showPassword,setShowPassword]=useState(false)
    const [password,setPassword]=useState('')
    const [username,setUserName]=useState('')
    const navigate=useNavigate()
   function checkPassword(val){
   let newVal=val.replaceAll(/\s/g,'')
   setPassword(newVal);
   document.querySelector('.error').style.opacity='0'
   }
   function checkUserName(val){
    let newVal=val.replaceAll(/\s/g,'')
    setUserName(newVal);
    document.querySelector('.error').style.opacity='0'
   }
   function formSubmission(e){
    e.preventDefault();
    if(username==='annRachel'&&password==='password'){
       sessionStorage.setItem('login',true)
       navigate('/home')
    }else{
        document.querySelector('.error').classList.add('showError')
        setTimeout(() => {
            document.querySelector('.error').style.opacity='1'
            document.querySelector('.error').classList.remove('showError')
        }, 500);
    }
   }
   
    return (
        <div className="loginMain">

        <div class="login-card">
            <div class="login-card-content">
                <div class="header">
                    <div class="logo">
                        <img src={logo} alt="" />
                    </div>
                    <h2>HEXAWARE</h2>
                    <h3>company slogan</h3>
                </div>
                <form class="form">
                    <div className='error'>
                        <label htmlFor="" style={{color:'red'}}>Invalid username or password!</label>
                    </div>
                    
                   
                    <div class="form-field username">
                        <div class="icon">
                            <i class="far fa-user"></i>
                        </div>
                        <input onChange={(e)=>checkUserName(e.target.value)} value={username} type="text" placeholder="Username" />
                    </div>
                    <div class="form-field password">
                        <div class="icon">
                            <i class="fas fa-lock"></i>
                        </div>
                        <input onChange={(e)=>checkPassword(e.target.value)} value={password}  className='passwordLogin' type={showPassword?"text":"password"} placeholder="Password" />
                        
                       {!showPassword?<i class="passwordShow fa-solid fa-eye" onClick={()=>setShowPassword(!showPassword)}></i>:<i class="passwordShow passwordHide fa-solid fa-eye-slash" onClick={()=>setShowPassword(!showPassword)}></i>}
                        
                    </div>

                    <input onClick={(e)=>formSubmission(e)} type="submit" value="Login" />
                    
                </form>
            </div>
            
        </div>
        </div>
    )
}

export default Login