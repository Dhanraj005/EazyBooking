import React from 'react'
import Navbar from '../../Componants/navbar/Navbar'
import Header from '../../Componants/Header/Header'
import Feature from '../../Componants/feature/Feature'
import Property from '../../Componants/propertyList/Property'
import FeaturedHotel from '../../Componants/Header/FeaturedHotel/FeaturedHotel'
import Mail from '../../Componants/Mail/Mail'
import Footer from '../../Componants/Footer/Footer'

const Home = () => {
  return (
    <>
    <div>
<Navbar/>
<Header/>
<div  className='flex-col mt-20  items-center gap-30 flex gap-30'>
<Feature/>
<h1 className='font-bold text-3xl'>Browse by Property type</h1>
<Property/>
<h1 className='font-bold text-3xl'>Top featured properties by guests</h1>
<FeaturedHotel/>
<Mail/>
<Footer/>


</div>
</div>
</>
  )
}

export default Home
