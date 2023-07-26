
import React, { useState } from 'react';
import statesData from './StateData';
import citiesData from './CityData';

const StateCityList = ({ statesData, citiesData }) => {

  const [selectedStateId, setSelectedStateId] = useState('');

  
  const filteredcities = () => {
    if (citiesData[`id_${selectedStateId}`]) {
      return citiesData[`id_${selectedStateId}`];
    } else {
      return [];
    }
  };

  const handleStateChange = (event) => {
    setSelectedStateId(event.target.value);
  };

  
  return (
    <>
    <div className='flex items-center mb-4 mt-4 ml-4'>
      <label for="state" className="flex-none font-medium mr-2">State:</label>

      <select id="state"  className="flex-grow  px-8 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 "
         onChange={handleStateChange} value={selectedStateId} >

        <option >Select State</option>
        {statesData.map((state) => (<option key={state.id} value={state.id}>{state.stateName}</option>))}
      </select>
    </div>


    <div className='flex items-center mb-4 mt-4 ml-1'>

      <label for="city" className='flex-none font-medium mr-4 ml-4 '>City:</label>

      <select id="city" className='flex-grow  px-8 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'>
      <option >select your city </option>
        {filteredcities().map((city) => (<option key={city} value={city}> {city}</option>))}
      </select>
    </div>
    </>
  );
  
};

export default StateCityList;