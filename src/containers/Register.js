import React from 'react'
import '../assets/styles/components/Register.scss'
import '../assets/styles/components/Button.scss'

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Registro</h2>
      <form className='register__container--form'>
        <input
          aria-label='Nombre'
          className='input-form'
          type='text'
          placeholder='Nombre'
        />
        <input
          aria-label='Correo'
          className='input-form'
          type='text'
          placeholder='Correo'
        />
        <input
          aria-label='Contraseña'
          className='input-form'
          type='password'
          placeholder='Contraseña'
        />
        <button className='button'>Registrarme</button>
      </form>
      <p className='register__container--sesion'>
        <a href=''>Iniciar sesión</a>
      </p>
    </section>
  </section>
)

export default Register
