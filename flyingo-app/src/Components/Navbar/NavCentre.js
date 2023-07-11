import React from 'react'

function NavCentre({btn}) {
  return (
    <div className='flex flex-col items-end mr-20 pt-28 pb-28 space-y-2'>
        <label className='text-5xl font1 drop-shadow-2xl shadow-black'> World's Best Flights</label>
        <label className='text-xl font2'>Experience Most Luxuries Flights</label>
        <button className='border rounded-full px-4 py-2 font2 font-semibold text' >{btn}</button>
    </div>
  )
}

export default NavCentre