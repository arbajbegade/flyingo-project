import {useState} from 'react'

const fromCities=[
    { id:1, city:'Mumbai' },
    { id:2, city:'Pune' },
    { id:3, city:'Delhi' },
    { id:4, city:'Hydrabad' },
    { id:5, city:'Chennai' },
    { id:6, city:'Bengluru' },
]
const d = fromCities.map(p => <option className='cursor-pointer ' > {p.city}</option> )

function From() {
    const [showFrom,setShowFrom]=useState(false)
    const handleShowFrom = () =>{
        setShowFrom(!showFrom)
    }
  return (
    <div className='relative border-2 rounded-s-lg px-5 py-2' onClick={handleShowFrom}>
      <div htmlFor=""> From</div>
      <select className='focus:outline-none w-48 '>
        {d}
      </select>
    </div>
  )
}

export default From