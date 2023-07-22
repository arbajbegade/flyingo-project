import React from 'react'

function OfferItem({img, country, city}) {
  return (
    <div className='flex flex-col items-center shadow my-5 mx-10' >
        <img src={img} alt="" className='woffer' />
        <label className='font2 text-base '> {country} </label>
        <label className='font1 text-xl font-semibold px-2 py-1 rounded-2xl bg-yellow-400'> {city} </label>
        <label className='font4 text-xl mt-2 font-semibold textcolor pb-2'>Discover Your Self</label>
    </div>
  )
}

export default OfferItem