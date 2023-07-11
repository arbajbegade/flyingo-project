import React from 'react'
import '../../App.css'
import '../Css/Offer.css'
import OfferList from './OfferList'

function Offer() {
  return (
    <div className='flex flex-col items-center mt-20 '>
      <label className='pb-4 font4 text-xl'>Featured destinations from India</label>
      <OfferList></OfferList>

    </div>
  )
}

export default Offer