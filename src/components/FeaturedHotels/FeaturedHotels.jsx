import React from 'react'
import './FeaturedHotels.css'
import { images } from '../constants'

const FeaturedHotels = () => {
  return (
    <div className='featuredHotels'>
        <div className="fpItem">
            <img src={images.hotel1} alt="" />
            <span className='fpName'>Lavigor Hotel</span>
            <span className="fpCity">Jos</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={images.hotel1} alt="" />
            <span className='fpName'>Lavigor Hotel</span>
            <span className="fpCity">Jos</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={images.hotel1} alt="" />
            <span className='fpName'>Lavigor Hotel</span>
            <span className="fpCity">Jos</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedHotels