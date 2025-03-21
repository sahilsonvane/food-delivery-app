import React, { useContext, useState } from 'react'
import "./LoginPopup.css"
import assets from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up")
    const {url, token, setToken} = useContext(StoreContext);
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data)=> ({...data, [name]:value}))
    }

    const onLogin = async (event) =>{
        event.preventDefault()
        
        let newUrl = url;
        if(currentState === "Login"){
            newUrl += "/api/user/login"
        }else{
            newUrl += "/api/user/register"
        }

        const res = await axios.post(newUrl , data);
        
        if(res.data.success){
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token)
            setShowLogin(false)
        }else{
            alert(res.data.message)
        }

    }

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} />
            </div>
            <div className="login-popup-inputs">                
                {currentState === "Login" ? <></>: <input onChange={onChangeHandler} value={data.name} name='name' type="text" placeholder="Your name" required />}
                <input onChange={onChangeHandler} value={data.email} name='email' type="email" placeholder="Your email" required />
                <input onChange={onChangeHandler} value={data.password} name='password' type="password" placeholder="Password" required />
            </div>
            <button type='submit'>{currentState === "Sign Up"? "Create Account" : "Login" }</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currentState === "Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login </span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup