import React, { useState } from 'react'
import FlightStatus from './FlightStatus'
import From from './From'
import To from './To'

function Book({onFrom,onTo,getValue}) {
  const [showReturn,setShowReturn] = useState(true)
  const [color1,setColor1] = useState()
  const [color2,setColor2] = useState()
  const [aa,setAa] = useState()
  const handleShowReturn = ()=>{
    setShowReturn(!showReturn)
  }
  const handleColor = (index) =>{
    setColor1('')
    setColor2('')
    if(index==1){
      setColor1('#7e1b4e')
    }else if(index==2){
      setColor2("#7e1b4e")
    }
  }
  const handleDate = (e)=>{
    setAa(e.target.value)
    getValue(aa)
  }

  return (
    <div className='bg-white' >
      <div className='flex mb-2 ml-4 space-x-4'>
        <div className='flex items-center space-x-1'>
           <button  disabled={showReturn === false} onClick ={()=>{handleShowReturn() ;handleColor(1)}} style={{backgroundColor:color1}} className='h-4 w-4 border border-gray-400 rounded-full'></button>
           <label> On Way </label>
        </div>
        <div className='flex items-center space-x-1'>
           <button disabled={showReturn === true} onClick ={()=>{handleShowReturn() ;handleColor(2)}} style={{backgroundColor:color2}} className='h-4 w-4 border border-gray-400 rounded-full'></button> 
           <label> Round Trip  </label>
        </div>
      </div>
      <div className='flex px-5 justify-center space-x-1 font4'>
        <From onFrom={onFrom} />
        <To onTo={onTo} />
        <div className='flex flex-col border-2 px-5 py-2 hover:border-gray-400'>
          <label htmlFor="">Depart</label>
          <input onChange={handleDate} type="date" className='pl-2 focus:outline-none' placeholder='Airport'  />
        </div>
        {showReturn && (
        <div className='flex flex-col border-2 px-5 py-2 hover:border-gray-400'>
          <label htmlFor="">Return</label>
          <input type="date" className=' focus:outline-none' placeholder='Airport' />
        </div> )
        }

        <FlightStatus></FlightStatus>
      </div>
    </div>
  )
}

export default Book