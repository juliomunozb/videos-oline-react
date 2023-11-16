import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'

const Home = ({ myList, trends, originals }) => {
  const isInFavorites = (idItem) => {
    let isInFavorite = false
    if ((myList || []).length > 0) {
      const videoInMyList = myList.filter((item) => {
        return item.id === idItem
      })
      if (videoInMyList.length > 0) {
        isInFavorite = videoInMyList.map((video) => {
          if (video.id === idItem) {
            return true
          } else {
            return false
          }
        })[0]
      }
    }
    return isInFavorite
  }
  return (
    <>
      <Search />
      {(myList || []).length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((video) => (
              <CarouselItem
                key={`${video.name}-${video.duration}`}
                {...video}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {(trends || []).length > 0 &&
            trends.map((video) => (
              <CarouselItem
                key={video.id}
                {...video}
                isInFavorites={isInFavorites(video.id)}
              />
            ))}
        </Carousel>
      </Categories>

      <Categories title='Recomendados'>
        <Carousel>
          {(originals || []).length > 0 &&
            originals.map((video) => (
              <CarouselItem
                key={video.id}
                {...video}
                isInFavorites={isInFavorites(video.id)}
              />
            ))}
        </Carousel>
      </Categories>
      <Footer />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}
export default connect(mapStateToProps, null)(Home)
