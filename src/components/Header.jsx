import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-visionRibbon.png'
import userIcon from '../assets/static/user-icone.png'
// Componente Presentational: Solo van a tener una sección de HTML dentro proyecto
const Header = (props) => {
  const { user } = props

  const avatar = () => {
    const hashUser = Object.keys(user).length > 0
    let src = userIcon
    let alt = 'user'
    if (hashUser) {
      src = gravatar(user.email)
      alt = user.email
    }
    return <img src={src} alt={alt} />
  }
  return (
    <header className='header'>
      <div className='header--logo'>
        <Link to='/'>
          <img className='header__img' src={logo} alt='Logo' />
        </Link>
        <span className='header__span'>VisionRibbon</span>
      </div>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {avatar()}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <Link to='/login'>Iniciar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
const mapStatetToProps = (state) => {
  return { user: state.user }
}
export default connect(mapStatetToProps, null)(Header)
