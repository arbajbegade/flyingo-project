import { useState } from 'react'
import AdultTicket from './AdultTicket'
import ChildTicket from './ChildTicket'

function FlightStatus() {
    const[passengerDetails,setPassengerDetails] = useState(false)
    const[passenger,setPassenger]=useState(1)
    const[passengerClass,setPassengerClass]=useState('Economy')
    const[color,setColor]=useState('')

    const handlePassenger = ()=>{
      setPassengerDetails(!passengerDetails)
    }
    const handleEconomy = ()=>{
      setPassengerClass('Economy')
    }
    const handlePremium = ()=>{
      setPassengerClass('Premium')
    }

  return (
    <div className='relative border-2 rounded-e-lg py-2'>
          <label className='mx-5'>Travellers & Cabin Class </label>
          <div className='mx-5 mt-1 cursor-pointer' onClick={handlePassenger}>{passenger} Passenger, {passengerClass} </div>
            { passengerDetails && 
            <div className='absolute bg-white top-20 -mt-2 w-80 pt-4 pb-4 shadow-2xl shadow-indigo-900/50 rounded-lg'>

              <div className="flex px-8 flex-col space-y-5">
                <label className='text-base font-semibold'>Passenger  <hr className="h-[0.6px] border-0 bg-gray-500" /></label>
                <div className='flex justify-between'>
                  <label>Adults</label>
                  <AdultTicket passenger={passenger} setPassenger={setPassenger} />
                </div>
                <div className='flex justify-between'>
                  <label >Child</label>
                  <ChildTicket passenger={passenger} setPassenger={setPassenger} />
                </div>
                <label className='text-base font-semibold'>Class  <hr className="h-[0.6px] border-0 bg-gray-500" /></label>
               
                <div className='flex flex-col space-y-3'>
                  <div className='flex justify-between'>
                    <label>Economy</label>
                    <div onClick={handleEconomy} className='h-5 w-5 border-2 border-black rounded-full'></div>
                  </div>
                  <div className='flex justify-between'>
                    <label>Premium(Business/First)</label>
                    <div onClick={handlePremium} className='h-5 w-5 border-2 border-black rounded-full'></div>
                  </div>
                </div>
                <button onClick={handlePassenger} className='bgcolor text-white py-2 rounded-3xl'>Confirm </button>
              </div>
            
            </div>
}
        </div>
  )
}

export default FlightStatus;