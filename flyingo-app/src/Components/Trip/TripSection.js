import React from "react";
import Trip from "./Trip";
import tripList from "./tripList";
import { Link } from "react-router-dom";

function TripSection() {
  return (
    <div>
      <div className="text-center py-10 text-2xl font-bold">
        Flight Deals From India
      </div>

      <div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tripList.map((trip) => (
            <li
              key={trip.id}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <Link to={"/trip-details/" + trip.id}>
                <Trip trip={trip} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TripSection;
