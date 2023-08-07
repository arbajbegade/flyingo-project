import React from 'react'

function OfferItem({ imageUrl }) {
  return (
    <>
      <div className="card bg-white w-[300px] h-[250px] m-2 rounded-lg shadow-lg">
        <div className="">
          <img
            className="w-[300px] h-[250px] object-cover p-2"
            src={imageUrl}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default OfferItem