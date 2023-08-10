import React from "react";
import { useParams } from "react-router-dom";
import offers from "./offers";

function OfferDetails() {
  const { id } = useParams(); // Get the item id from the URL params
  const offer = offers.find((l) => l.id == id);

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="text-2xl font-semibold mb-4">{offer.title}</div>

          <div className="bg-gray-200 p-4 rounded-lg mb-4">
            <div className="text-lg font-semibold">Highlight</div>

            <div className="flex justify-center items-center mt-2">
              <span className="text-green-500 mr-2">{offer.coupon}</span>
              <span className="text-blue-500 mr-2">{offer.discount}</span>
              <span className="text-gray-500">{offer.validity}</span>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold mb-2">About this offer:</div>
            <ul className="list-disc pl-6">
              {offer.about.map((x, index) => (
                <li key={index} className="mb-2">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferDetails;
