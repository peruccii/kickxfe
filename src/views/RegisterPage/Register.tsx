import React, { useEffect, useState, useRef } from 'react'

import googlelogo from '../../assets/Googlelogo.png'
import { useNavigate } from 'react-router-dom'
import RegisterPage from './components/RegisterPage'

const Register = () => {
    const navigate = useNavigate()
    return (
       <div>
        <RegisterPage/>
       </div>
    )
}

export default Register

