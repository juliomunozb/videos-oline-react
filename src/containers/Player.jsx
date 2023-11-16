import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { getVideoSource } from '../actions'
import NotFound from './NotFound'
import '../assets/styles/components/Player.scss'

const Player = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const hasPlayin = Object.keys(props.playing).length > 0

  useEffect(() => {
    props.getVideoSource(id)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return isLoading
    ? <LoadingSpinner />
    : hasPlayin
      ? (
        <>
          <section className='player'>
            <video controls autoPlay className='player__video' src={props.playing.source} />
            <section className='button__back'>
              <button className='button' onClick={() => navigate(-1)}> Regresar</button>
            </section>
          </section>
        </>
        )
      : <NotFound />
}

const mapDispatchToProps = {
  getVideoSource
}
const mapStateToProps = (state) => {
  return { playing: state.playing }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
