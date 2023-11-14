import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest } from '../actions'
import '../assets/styles/components/Login.scss'
import '../assets/styles/components/Button.scss'
import twitterIcon from '../assets/static/twitter-icon.png'
import googleIcon from '../assets/static/google-icone.png'

const Login = (props) => {
  const navigate = useNavigate()
  const [form, setValues] = useState({
    email: ''
  })
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSumbmit = (event) => {
    event.preventDefault()
    props.loginRequest(form)
    navigate('/')
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Iniciar sesión</h2>
        <form className='login__container--form' onSubmit={handleSumbmit}>
          <input
            name='email'
            aria-label='Correo'
            className='input-form'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            aria-label='Contraseña'
            className='input-form'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' name='' id='cbox1' value='checkbox' />
              Recuerdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='Google' />Inicio sesión
            con Google
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter' />Inicio sesión
            con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta <Link to='/register'> Regístrate </Link>
        </p>
      </section>
    </section>
  )
}
const mapDispatchToProps = {
  loginRequest
}
export default connect(null, mapDispatchToProps)(Login)
