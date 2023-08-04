import React from "react";
import { useParams } from "react-router-dom";
import locations from "./card";

function DestinationDetails() {
  const { id } = useParams(); // Get the item id from the URL params
  const location = locations.find((l) => l.id == id);
//   console.log(location);
//   console.log(location.image);

  return (
    <>
      <div>
        <div> {location.id} </div>
        <div>{location.title}</div>
        <div>{location.description}</div>
        {/* <img src={image} alt="place_image" width={800} height={700} /> */}
      </div>
    </>
  );
}

export default DestinationDetails;
