import React from 'react'
import './Home.css'
import { Navbar, Header, Featured, PropertyList, FeaturedHotels, MailList, Footer } from '../../components'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList />
            <h1 className="homeTitle">Home guests love</h1>
            <FeaturedHotels />
            <MailList />
            <Footer />
        </div>
    </div>
  )
}

export default Home