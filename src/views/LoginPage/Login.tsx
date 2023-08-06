import React, { useEffect, useState, useRef } from 'react'
import './styles/loginpage.css'
import googlelogo from '../../assets/Googlelogo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <body className='body_login'  >
            <div className="containerLogin">
                <div className="squareLogin">
                    <h1>KICKX</h1>
                </div>
                <div className="login-form">
                    <h2>Welcome back</h2>
                    <p>Welcome back! Please enter your details.</p>
                    <form>
                        <div className="form-group">
                            <label className="label_loginemail" htmlFor="email">Email</label>
                            <input className="inputs_login" type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label className="label_login" htmlFor="password">Password</label>
                            <input className="inputs_login" type="password" id="password" name="password" placeholder="Enter your password" />
                            <div className="remember-forgot">
                                <input type="checkbox" id="remember" name="remember" />
                                <label htmlFor="remember">Remember me</label>
                                <a href="#" className="forgot-password">Forgot password</a>
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="signin_button_login">Sign in</button>
                            <button className="google_button_login">
                                <img src={googlelogo} style={{ height: 30, width: 30, marginLeft: 30 }} />
                                <span>Sign in with google</span>
                            </button>
                        </div>
                    </form>
                    <p>Don't have an account? <p style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { navigate(`/register`, { replace: true }) }} >Register</p></p>
                </div>
            </div>
        </body>
    )
}

export default Login

