import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-visionRibbon.png'
import userIcon from '../assets/static/user-icone.png'
// Componente Presentational: Solo van a tener una sección de HTML dentro proyecto
const Header = () => {
  return (
    <header className='header'>
      <div className='header--logo'>
        <img className='header__img' src={logo} alt='Logo' />
        <span className='header__span'>VisionRibbon</span>
      </div>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='user' />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <a href='/'>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
