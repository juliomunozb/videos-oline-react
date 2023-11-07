import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'

const App = () => {
  const initialState = useInitialState(API)
  const dataVideos = Object.keys(initialState).length

  return dataVideos === 0
    ? (
      <h1>Loading...</h1>
      )
    : (
      <div className='App'>
        <Header />
        <Search />
        {(initialState.myList || []).length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )}

        <Categories title='Tendencias'>
          <Carousel>
            {(initialState.trends || []).length > 0 &&
            initialState.trends.map((video) => (
              <CarouselItem key={video.id} {...video} />
            ))}
          </Carousel>
        </Categories>

        <Categories title='Recomendados'>
          <Carousel>
            {(initialState.originals || []).length > 0 &&
            initialState.originals.map((video) => (
              <CarouselItem key={video.id} {...video} />
            ))}
          </Carousel>
        </Categories>
        <Footer />
      </div>
      )
}

export default App
