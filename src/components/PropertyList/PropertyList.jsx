import React from 'react'
import './PropertyList.css'
import { images } from '../constants'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={images.hotel5} alt="" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={images.hotel4} alt="" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={images.hotel5} alt="" />
            <div className="pListTitles">
                <h1>Restaurants</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={images.hotel4} alt="" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={images.hotel5} alt="" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList