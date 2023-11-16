import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import NotFound from './NotFound'
import '../assets/styles/components/Player.scss'

const Player = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const hasPlayin = Object.keys(props.playing).length > 0
  useEffect(() => {
    props.getVideoSource(id)
  }, [])

  return hasPlayin
    ? (
      <>
        <section className='button__back'>
          <button className='button' onClick={() => navigate(-1)}> Regresar</button>
        </section>
        <section className='player'>
          <video controls autoPlay className='player__video' src={props.playing.source} type='video/mp4' />
          <section className='player__controls'>
            <button className='button'>Pay/Pause</button>
            <button className='button'>Mute/Unmute</button>
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
