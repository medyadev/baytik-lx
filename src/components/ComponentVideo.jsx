import React, { useEffect } from 'react'
import VideoBaytik from '../assets/video/video.webm'
import Aos from 'aos'

const ComponentVideo = () => {

  return (
    <section className='mt-[100px] '>
      <div  className=" mb-16 mx-auto  ">
        <div className="w-full h-[full] py-5 video-group">
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{ pointerEvents: 'none' }}
            className="w-full "
          >
            <source src={VideoBaytik} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default ComponentVideo
