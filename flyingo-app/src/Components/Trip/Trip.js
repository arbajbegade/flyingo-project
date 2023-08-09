import React from "react";

function Trip({ trip }) {
  const { image, name } = trip;
  console.log(image);
  return (
    <div className="w-full items-center justify-between space-x-6 p-6">
      <img className="h-100 w-100 bg-gray-300" src={image} alt="" />

      <div>
        <div className="items-center space-x-3">
          <h3 className="font-medium text-gray-900">{name}</h3>
        </div>

        <p className="text-sm text-gray-500">Get Fares</p>
      </div>
    </div>
  );
}

export default Trip;
