import { useState } from 'react'

function FlightStatus() {
    const[show,setShow] = useState(false)
    const handleShowChange= () =>{
        setShow(!show)
    }
  return (
    <div className='flex flex-col border-2 px-5 rounded-e-lg py-2'>
          <label onClick={handleShowChange}>Travellers & Cabin Class </label>
          {
            show && 
            <div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </div>
          }
        </div>
  )
}

export default FlightStatus
  {/* <a href="">1 Adult, Economy</a> */}