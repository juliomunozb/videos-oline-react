import React from 'react'
import Footer from '../components/Footer'
import '../assets/styles/components/NotFound.scss'
import '../assets/styles/components/_animation.scss'
const NotFound = () => (
  <>
    <section className='error'>
      <section className='error__container'>
        <p className='error__container--code animation rotate'>404</p>
        <p className='error__container--description'>
          Página no encontrada
        </p>
      </section>
    </section>
    <Footer />
  </>
)
export default NotFound
