import { useState } from "react";
import StateCityList from "./StateCityList";
import statesData from "./StateData";
import citiesData from "./CityData";
export default function SubscriptionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  return (
    <div className="flex  flex-col  justify-evenly">
      <form className="max-w-md mx-auto">
        <div className="mb-4 mt-4 ml-4 flex items-center">
          <label htmlFor="name" className="flex-none font-medium mr-2"> Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="flex-grow  px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"/>
        </div>

        <div className="flex items-center ml-4">
          <label for="email" className="flex-none font-medium mr-2"> Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email address"/>
        </div>

        <div>
          <StateCityList statesData={statesData} citiesData={citiesData} />
        </div>

        <div className="flex space-x-2 space ml-4  my-8">
          <input type="checkbox" className="form-checkbox text-blue-500" />
          <label className="text-pink-950 font-semibold text-lg">
            I would like to get offers and news from airways. I have read and
            understood the policy notice.
          </label>
        </div>
      </form>
    </div>
  );
}
