import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFavorite, deleteFavorite } from '../actions'
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'
import iconPlay from '../assets/static/play-icon.png'
import iconPlus from '../assets/static/plus-icon.png'
import iconDelete from '../assets/static/delete-icon.png'

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList, isInFavorites } = props

  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration })
  }

  const handleDeleteFavorite = (idItem) => {
    props.deleteFavorite(idItem)
  }

  const showIcon = () => {
    let icone = ''
    if (isList) {
      icone = (
        <img
          className='carousel-item__details--img'
          src={iconDelete}
          alt='delete'
          onClick={() => handleDeleteFavorite(id)}
        />
      )
    } else {
      if (!isInFavorites) {
        icone = (
          <img
            className='carousel-item__details--img'
            src={iconPlus}
            alt='pluss'
            onClick={handleSetFavorite}
          />
        )
      }
    }
    return icone
  }
  return (

    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={iconPlay}
              alt='play'
            />
          </Link>
          {showIcon()}
        </div>
        <p className='carousel-item__details--title'>{title}- {isInFavorites ? 'true' : 'false'}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    myList: state.myList
  }
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}
export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem)
