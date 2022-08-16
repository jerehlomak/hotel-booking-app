import React from 'react'
import './Featured.css'
import { images } from '../constants'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src={images.hotel1} alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>500 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={images.hotel2} alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>James</h1>
          <h2>600 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={images.hotel3} alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>John</h1>
          <h2>50 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured