import React from 'react'
import OfferItem from './OfferItem'

const img =[
    {
      img: 'Images/brazil.jpg',
      country: 'BRAZIL',
      city: 'Rio de Janeiro'
    },
    {
      img: 'Images/dubai.jpg',
      country: 'UNITED ARAB EMIRATES',
      city: 'Dubai'
    },
    {
      img: 'Images/canada.jpg',
      country: 'CANADA',
      city: 'Victoria'
    },
    {
      img: 'Images/berlin.jpg',
      country: 'GERMANY',
      city: 'Berlin'
    },
]


function OfferList() {
  
  const list = img.map((l)=>(
    <OfferItem img={l.img} country={l.country} city={l.city} />
  ))



  return (
    <div className='flex items-center justify-center flex-wrap'>
       {list}
        
    </div>
  )
}

export default OfferList