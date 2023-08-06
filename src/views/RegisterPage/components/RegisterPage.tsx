import React, { useEffect, useState, useRef, ChangeEvent, FormEvent } from 'react'
import '../styles/registerpage.css'

import { useNavigate } from 'react-router-dom'
import { getLatitudeLongitude } from '../../../utils/getLatitudeLongitude'

type dados = {
  email: string,
  password: string,
  birthDate: string,
  name: string,
  cpf: string,
  endereco: {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    numero: string,
    complemento: string,
    latitude: number,
    longitude: number
},
}

const RegisterPage = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')
  const [complemento, setComplemento] = useState('')
  const [numero, setNumero] = useState('')
  const [password, setPassword] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [user, setUser] = useState({
    name: name,
    cpf: cpf,
    email: email,
    cep: cep,
    complemento: complemento,
    numero: numero,
    password: password,
    birthDate: birthDate,
  })

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value)
    setUser({ name: event.target.value, email, birthDate: birthDate, password, cpf, cep, complemento, numero })
  }
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
    setUser({ name, email: event.target.value, birthDate: birthDate, password, cpf, cep, complemento, numero })
  }
  const handleChangeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setBirthDate(event.target.value)
    setUser({ name, cpf: cpf, email, birthDate: event.target.value, password, cep, complemento, numero })
  }
  const handleChangeCpf = (event: ChangeEvent<HTMLInputElement>): void => {
    setBirthDate(event.target.value)
      setUser({ name, cpf:event.target.value, email, birthDate: birthDate, password, cep, complemento, numero })
  }
  const handleChangeCep = (event: ChangeEvent<HTMLInputElement>): void => {
    setCep(event.target.value)
    setUser({ name, cpf: cpf, email, birthDate: birthDate, cep: event.target.value, complemento, numero, password })
}

  async function register(event: FormEvent) {
    event.preventDefault()

    const cepInfo = await fetch(`https://opencep.com/v1/${cep.replace('-', '')}.json`)
    const cepInfoResponse = await cepInfo.json()
    const latlong = await getLatitudeLongitude({ logradouro: cepInfoResponse.logradouro, cidade: cepInfoResponse.localidade, estado: cepInfoResponse.uf })

    const usuario: dados = {
      name: name,
      cpf: cpf,
      endereco: {
          cep: cep,
          logradouro: cepInfoResponse.logradouro,
          bairro: cepInfoResponse.bairro,
          cidade: cepInfoResponse.localidade,
          estado: cepInfoResponse.uf,
          numero: numero,
          complemento: complemento ? complemento : " ",
          latitude: latlong.lat,
          longitude: latlong.lng
      },
      email: email,
      password: password,
      birthDate: `${birthDate}T12:01:30.543Z`
    }

    const cadastro = await fetch(`http://localhost:4000/user`, {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
          'content-type': 'application/json'
      }
  })
}

  return (
    <div className="containerLogin">
      <div className="squareLogin">
        <h1>KICKX</h1>
      </div>
      <div className="login-form">
        <h2>Register</h2>
        <p>Welcome back! Please enter your details.</p>
        <form>
          <div className="form-group">
            <label className="label_loginemail" htmlFor="email">Name</label>
            <input className="inputs_login" type="email" id="email" name="email" placeholder="Name" />
          </div>
          <div className="form-group">
            <label className="label_loginemail" htmlFor="email">E-mail</label>
            <input className="inputs_login" type="email" id="email" name="email" placeholder="example@example.com" />
          </div>
          <div className="form-group">
            <label className="label_loginemail" htmlFor="email">Confirm e-mail</label>
            <input className="inputs_login" type="email" id="email" name="email" placeholder="Confirm your email" />
          </div>
          <div className="form-group">
            <label className="label_loginemail" htmlFor="email">Telefone</label>
            <input className="inputs_login" type="email" id="email" name="email" placeholder="[XX] XXXXXXX-XXXX" />
          </div>
          <div className="form-group">
            <label className="label_loginemail" htmlFor="email">Password</label>
            <input className="inputs_login" type="password" id="password" name="password" placeholder="Passowrd" />
          </div>
          <div className="form-group">
            <label className="label_login" htmlFor="password">Confirm password</label>
            <input className="inputs_login" type="password" id="password" name="password" placeholder="Confirm passowrd" />
          </div>
          <div className="button-container">
            <button className="signin_button_login">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage

