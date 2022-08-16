import React from 'react'
import { Navbar, Header, Featured } from '../../components'

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  )
}

export default List