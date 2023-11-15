import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import useField from '../hooks/useField'
import '../assets/styles/components/Register.scss'
import '../assets/styles/components/Button.scss'

const Register = (props) => {
  const navigate = useNavigate()
  const name = useField({ type: 'text', name: 'name' })
  const email = useField({ type: 'text', name: 'email' })
  const password = useField({ type: 'password', name: 'password' })

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    props.registerRequest(formData)
    navigate('/')
    console.log(formData)
    // console.log(event.target.name.value)
  }
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Registro</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            {...name}
            placeholder='Nombre'
            aria-label='Nombre'
            className='input-form'
          />
          <input
            {...email}
            aria-label='Correo'
            className='input-form'
            placeholder='Correo'
          />
          <input
            {...password}
            aria-label='Contraseña'
            className='input-form'
            placeholder='Contraseña'
          />
          <button className='button'>Registrarme</button>
        </form>
        <p className='register__container--sesion'>
          <Link to='/login'>Iniciar sesión</Link>
        </p>
      </section>
    </section>
  )
}

const mapDisapatchToProps = {
  registerRequest
}
export default connect(null, mapDisapatchToProps)(Register)
