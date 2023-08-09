import React from 'react'
import { Outlet } from 'react-router-dom';
import Booking from "../Components/Booking/Booking";
import Navbar from '../Components/Navbar/Navbar'
import TripSection from '../Components/Trip/TripSection'


function Main() {
  return (
    <div>
      <Navbar/>
      <Booking/>
      <TripSection/>
      <Outlet/>
    </div>
  )
}

export default Main