import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import Slides from './Slides'

const Home = ({handleAdd}) => {
  return (
    <>
    <div>
        <Hero/>
        <Delivery/>
        <Slides handleAdd={handleAdd}/>
    </div>
    </>
  )
}

export default Home