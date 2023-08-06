import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import PreLoader from './components/PreLoader'
import Reveal from './components/Reveal'
import './styles/initialhome.css'
import { motion } from "framer-motion"

const InitialHome = () => {
  const navigate = useNavigate()
  return (
    <div className='body_initial'>
      <PreLoader />

      <div className="container">
        <div className="center-content">
          <h1 className='titlewolrd_initialhome'>WORLD</h1>
          <h1 className='title_initialhome'>KICKX</h1>
          <p className='subtitle_initialhome'>Nam lectus lorem, facilisis nec sem pretium, congue vehicula augue. Phasellus placerat orci enim, sit amet commodo tortor maximus eu. Cras sed odio eget nisi vulputate fringilla quis consequat eros. Fusce eget do</p>
          <button className='button_initialhome' onClick={() => { navigate(`/login`, { replace: true }) }} >Comece agora</button>
        </div>
      </div>

      <div className="container">
        <div className="center-content">
          <Reveal>
            <h1 className='title2_initialhome'>Nam lectus lorem, facilisis nec sem pretium, congue vehicula augue. Phasellus placerat orci enim, sit amet commodo tortor maximus eu. Cras sed odio eget nisi vulputate fringilla quis consequat eros. Fusce eget do</h1>
          </Reveal>
          <div className="square"></div>
          <Reveal>
            <p className='subtitle_initialhome'>Nam lectus lorem, facilisis nec sem pretium, congue vehicula augue. Phasellus placerat orc</p>
          </Reveal>
          <button className='button_initialhome'>Button below the text</button>
        </div>
      </div>

      <div className="container3">
        <div className="center-content3">
          <div className="top-left">
            <Reveal>
              <h1 className='title2_initialhome'>Nam lectus lorem, facilisis nec sem pretium, congue vehicula augue. Phasellus placerat orci enim, sit amet commodo tortor maximus eu. Cras sed odio eget nisi vulputate fringilla quis consequat eros. Fusce eget do</h1>
            </Reveal>
          </div>
          <div className="square3"></div>
          <div className="top-right">
            <Reveal>
              <div className="topic">
                <img src="small_image_1.jpg" alt="Image 1"/>
                  <p>Topic 1</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="topic">
                <img src="small_image_2.jpg" alt="Image 2"/>
                  <p>Topic 2</p>
              </div>
            </Reveal>
          </div>
          <div className="bottom-left">
            <Reveal>
              <div className="topic">
                <img src="small_image_3.jpg" alt="Image 3"/>
                  <p>Topic 3</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitialHome

