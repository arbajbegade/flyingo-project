import {useState} from 'react'

function AdultTicket({passenger,setPassenger}) {
    const[adultCount,setAdultCount] = useState(1)

    const handleadultCount= () =>{
        setAdultCount(adultCount +1)
        setPassenger(passenger +1)
      }
      const handleadultCount1= () =>{
        setAdultCount(adultCount -1)
        setPassenger(passenger -1)
      }

  return (
    <div className="flex justify-center items-center space-x-3">
       <div disabled={adultCount === 1} onClick={handleadultCount1} className="h-6 w-6 border border-gray-500 rounded text-3xl grid place-content-center cursor-pointer hover:bg-yellow-300">-</div>
       <div>{adultCount}</div>
       <div onClick={handleadultCount} className="h-6 w-6 border border-gray-500 rounded text-3xl grid place-content-center pt-1 cursor-pointer hover:bg-yellow-300">+</div>
    </div>
  )
}

export default AdultTicket