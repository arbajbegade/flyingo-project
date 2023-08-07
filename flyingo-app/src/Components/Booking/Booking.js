import React from 'react'
import '../../App.css'
import '../Css/Booking.css'
import Book from './Book'
import BookBtn from './BookBtn'
import { IoAirplaneSharp, IoLocationOutline } from "react-icons/io5";
import { BiTrip } from "react-icons/bi";
import { BsFillCalendar2Fill } from "react-icons/bs";


function Booking() {
  return (
    <div className='width  -mt-20  m-auto shadow-2xl rounded-b-2xl pb-2'>
        <div className='flex justify-evenly bgcolor rounded-t-2xl text-lg text-white font4 py-2'>
            <div className='flex items-center space-x-1'> <IoAirplaneSharp size={"1.4rem"} /> <label>Book</label> </div>
            <div className='flex items-center space-x-1'> <BiTrip size={"1.4rem"}/> <label>My Trip</label> </div>
            <div className='flex items-center space-x-1'> <BsFillCalendar2Fill/><label>Check-In</label></div>
            <div className='flex items-center space-x-1'> <IoLocationOutline size={'1.4rem'} /><label>Flight Status</label></div>
        </div>
        <div className='h-48 flex flex-col justify-center bg-white pt-2'>
          <Book ></Book>
          <BookBtn btnname="Show Flights"></BookBtn>
        </div>
    </div>
  )
}

export default Booking