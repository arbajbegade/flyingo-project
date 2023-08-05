import React, { useState } from 'react'
import Book from '../../Components/Booking/Book'
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import AvailableFlights from './AvailableFlights';

function BookNow() {
  const navigate = useNavigate()
  const [from,setFrom] =useState('Mumbai')
  const [to,setTo] = useState('Select City')
  const [date,getDate] = useState()

  const getFrom = (a) =>{
    setFrom(a)
  }
  const onTo=(a)=>{
    setTo(a)
  }

  const getValue =(e)=>{
    getDate(e)
  }
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);

    // Get the day of the week
    const date = new Date(dateValue);
    const dayOptions = { weekday: 'long' }; // Options for formatting the day
    const dayOfWeek = new Intl.DateTimeFormat('en-US', dayOptions).format(date);
    setSelectedDay(dayOfWeek);
  };

  return (
    <div className='flex flex-col bg-gray-200'>
     <div className='border-2 flex justify- pt-4 bg-white'> 
      <BsArrowLeftShort size={"1.7rem"} onClick={()=>navigate(-1)} />
      <div className=' flex justify-center'> <Book onFrom={getFrom} onTo={onTo} getValue={getValue} /> </div>
     </div>

     <div className='flex flex-col'>
      <div className='font1 text-5xl pl-8 text-gray-600 '>
         <h1> Select your departure flight </h1>
         <h1> from <span className='textcolor'>{from}</span> to  <span  className='textcolor'> {to}</span>   </h1> 
      </div>
     </div>
     <div>
      <AvailableFlights/>
     </div>
    </div>
  )
}

export default BookNow





{/* <input type="date" value={selectedDate} onChange={handleDateChange} />
      <p>
          Selected Date: {selectedDate} <br />
          Selected Day: {selectedDay}
        </p> */}