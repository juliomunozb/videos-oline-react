import { useState, useEffect } from 'react'

const useInitialState = (API) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const videos = async () => {
      try {
        const response = await fetch(API)
        const data = await response.json()
        setVideos(data)
      } catch (error) {
        setVideos([])
        console.log('Error invocando API', error.message)
      }
    }
    videos()
  }, [])
  return videos
}

export default useInitialState
