import React from 'react'
import '../../App.css'
import '../Css/Booking.css'
import Book from './Book'
import BookBtn from './BookBtn'

function Booking() {
  return (
    <div className='width  -mt-20  m-auto shadow-2xl rounded-b-2xl pb-2'>
        <div className='flex justify-evenly bgcolor rounded-t-2xl text-lg text-white font4 py-3'>
            <div>Book</div>
            <div>My Trip</div>
            <div>Check-In</div>
            <div>Flight Status</div>
        </div>
        <div className='h-48 flex flex-col justify-center bg-white pt-2'>
          <Book></Book>
          <BookBtn btnname="Show Flights"></BookBtn>
        </div>
    </div>
  )
}

export default Booking