import React, {useEffect} from 'react'
import '../styles/preloader.css'
import { preLoaderAnim } from '../../../animations/index.tsx'
const PreLoader = () => {

  useEffect(() => {
    preLoaderAnim()
  },[])


  return (
    <div className="preloader">
      <div className="texts-container">
        <span>KICKX</span> 
      </div>
    </div>
  )
}

export default PreLoader