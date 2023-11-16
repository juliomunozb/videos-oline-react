import React from 'react'
import classNames from 'classnames'
import '../assets/styles/components/Footer.scss'
const Footer = (props) => {
  const { isLogin, isRegister } = props
  const footerClass = classNames('footer', {
    isLogin,
    isRegister
  })
  return (

    <footer className={footerClass}>
      <a href='/'> Términos de uso</a>
      <a href='/'> Declaración de privasidad</a>
      <a href='/'> Centro de ayuda</a>
    </footer>
  )
}
export default Footer
