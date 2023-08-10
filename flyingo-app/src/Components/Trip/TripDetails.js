import React, { useState } from "react";
import { useParams } from "react-router-dom";
import flightDetails from "./flightList";

function TripDetails() {
  const { id } = useParams(); // Get the item id from the URL params
  const flightinfo = flightDetails.find((flight) => flight.pid == id);
  const planesList = flightinfo.planesList;

  const [selectedFromLocation, setSelectedFromLocation] = useState("");
  const uniqueFromLocations = [
    ...new Set(flightinfo.planesList.map((plane) => plane.from)),
  ];
  const filteredPlanesList = planesList.filter(
    (plane) => plane.from === selectedFromLocation
  );

  return (
    <>
      <div className="">
        <label className="inline-flex  justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 ring-1 ring-inset">
          From:
          <select
            name="from"
            id="from"
            onChange={(e) => setSelectedFromLocation(e.target.value)}
          >
            <option value="">Select</option>
            {uniqueFromLocations.map((f, index) => (
              <option key={index} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-fuchsia-950">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left font-semibold text-white sm:pl-3"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-semibold text-white"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-semibold text-white"
                    >
                      Depart
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-semibold text-white"
                    >
                      Arrive
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-semibold text-white"
                    >
                      Airline
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-semibold text-white"
                    >
                      Total Duration
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-semibold text-white"
                    >
                      Price
                    </th>
                  </tr>
                </thead>

                <tbody className="">
                  {filteredPlanesList.map((p, index) => (
                    <tr
                      key={p.id}
                      className={index % 2 === 0 ? undefined : "bg-yellow-200"}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-3">
                        {p.from}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                        {p.to}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                        {p.depart}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                        {p.arrive}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                        {p.airline}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                        {p.totalHrs}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                        {p.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TripDetails;
