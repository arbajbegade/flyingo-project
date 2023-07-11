import React from 'react'
import '../../App.css'
import '../Css/Navbar.css'
import NavCentre from './NavCentre'
import NavItems from './NavItems'
import Navlist from './Navlist'

function Navbar(props) {
  return (
    <div className='bg  text-white py-5'>

    {/* ---------------------------------------------------------First line Navbar--------------------------------------------------------- */}
      <div className='flex justify-evenly'>
          <div>
            <label className='font1 text-xl font-semibold'>Flyingo</label>
            <p className='font3 font-medium -mt-2 ml-2'>Lets Fly</p>
          </div>
      <Navlist></Navlist>
      <NavItems></NavItems>
      </div>
    {/* ---------------------------------------------------------second line Navbar--------------------------------------------------------- */}
      <div>  <NavCentre btn="Book Now"></NavCentre>   </div>







    </div>
  )
}

export default Navbar