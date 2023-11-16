import React from 'react'
import '../assets/styles/components/Player.scss'

const Player = () => {
  return (
    <>
      <section className='button__back'>
        <button className='button'> Regresar</button>
      </section>
      <section className='player'>
        <video className='player__video' src='https://mdstrm.com/video/58333e214ad055d208427db5.mp4' type='video/mp4' />
        <section className='player__controls'>
          <button className='button'>Pay/Pause</button>
          <button className='button'>Mute/Unmute</button>
        </section>
      </section>
    </>
  )
}

export default Player
