import React from 'react'

function Book() {
  return (
    <div>
      <div className='flex px-5 justify-center space-x-1 font4'>
        <div className='flex flex-col border-2 rounded-s-lg px-5 py-2'>
          <label htmlFor="">From</label>
          <input type="text" className='pl-2 focus:outline-none' placeholder='Mumbai' />
        </div>
        <div className='flex flex-col border-2 px-5 py-2'>
          <label htmlFor="">To</label>
          <input type="text" className=' focus:outline-none' placeholder='Airport' />
        </div>
        <div className='flex flex-col border-2 px-5 py-2'>
          <label htmlFor="">Depart</label>
          <input type="date" className='pl-2 focus:outline-none' placeholder='Airport' />
        </div>
        <div className='flex flex-col border-2 px-5 py-2'>
          <label htmlFor="">Return</label>
          <input type="date" className=' focus:outline-none' placeholder='Airport' />
        </div>
        <div className='flex flex-col border-2 px-5 rounded-e-lg py-2'>
          <label htmlFor="">Travellers & Cabin Class </label>
          <a href="">1 Adult, Economy</a>
        </div>
      </div>
    </div>
  )
}

export default Book