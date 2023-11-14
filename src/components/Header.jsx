import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-visionRibbon.png'
import userIcon from '../assets/static/user-icone.png'
// Componente Presentational: Solo van a tener una sección de HTML dentro proyecto
const Header = (props) => {
  const { user } = props
  const hashUser = Object.keys(user).length > 0

  const avatar = ({ hashUser }) => {
    let src = userIcon
    let alt = 'user'
    if (hashUser) {
      src = gravatar(user.email)
      alt = user.email
    }
    return <img src={src} alt={alt} />
  }

  const listItemProfile = ({ hashUser }) => {
    if (hashUser) {
      return (
        <>
          <li>
            <a href='/'>{user.name}</a>
          </li>
          <li>
            <a href='/logout' onClick={handleLogout}>Cerrar Sesión</a>
          </li>
        </>
      )
    } else {
      return (
        <li>
          <Link to='/login'>Iniciar Sesión</Link>
        </li>
      )
    }
  }

  const handleLogout = () => {
    props.logoutRequest({})
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
          {avatar({ hashUser })}
          <p>Perfil</p>
        </div>
        <ul>
          {listItemProfile({ hashUser })}
        </ul>
      </div>
    </header>
  )
}
const mapStatetToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = {
  logoutRequest
}
export default connect(mapStatetToProps, mapDispatchToProps)(Header)
