import React from 'react'
import { FaPlaneDeparture } from 'react-icons/fa';


function BookBtn({btnname}) {
  return (
    <div className='flex space-x-2 justify-end mt-4 mr-8 items-center'>
        <label className='textcolor font-semibold'>+ Add Promocode</label>
        <button className=' font-semibold px-7 py-4 bg-yellow-400 rounded-lg text-lg font1 effect flex items-center space-x-3' > <FaPlaneDeparture size={"2rem"}/> <h1> {btnname}</h1></button>
    </div>
  )
}

export default BookBtn