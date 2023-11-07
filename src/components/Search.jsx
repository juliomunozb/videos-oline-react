import React from 'react'
import '../assets/styles/components/Search.scss'
const Search = () => (
  <section className='main'>
    <h1 className='main__title'>¿Qué quieres buscar hoy?</h1>
    <input className='input' type='text' placeholder='Buscar...' />
  </section>
)

export default Search
