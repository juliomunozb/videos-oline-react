import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import '../assets/styles/App.scss'

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {(myList || []).length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {(trends || []).length > 0 &&
            trends.map((video) => (
              <CarouselItem key={video.id} {...video} />
            ))}
        </Carousel>
      </Categories>

      <Categories title='Recomendados'>
        <Carousel>
          {(originals || []).length > 0 &&
            originals.map((video) => (
              <CarouselItem key={video.id} {...video} />
            ))}
        </Carousel>
      </Categories>
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
