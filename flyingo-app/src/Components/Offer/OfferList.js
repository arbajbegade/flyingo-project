import React from 'react'
import OfferItem from './OfferItem'

const img =[
    {
      id:1,
      img: 'Image/brazil.jpg',
      country: 'BRAZIL',
      city: 'Rio de Janeiro'
    },
    {
      id:2,
      img: 'Image/dubai.jpg',
      country: 'UNITED ARAB EMIRATES',
      city: 'Dubai'
    },
    {
      id:3,
      img: 'Image/canada.jpg',
      country: 'CANADA',
      city: 'Victoria'
    },
    {
      id:4,
      img: 'Image/berlin.jpg',
      country: 'GERMANY',
      city: 'Berlin'
    },
]


function OfferList() {
  
  const list = img.map((l)=>(
    <OfferItem key={l.id} img={l.img} country={l.country} city={l.city} />
  ))



  return (
    <div className='flex items-center justify-center flex-wrap'>
       {list}
        
    </div>
  )
}

export default OfferList