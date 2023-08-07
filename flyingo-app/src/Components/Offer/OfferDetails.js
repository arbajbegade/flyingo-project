import React from "react";
import { useParams } from "react-router-dom";
import offers from "./offers";

function OfferDetails() {
  const { id } = useParams(); // Get the item id from the URL params
  const offer = offers.find((l) => l.id == id);

  return (
    <>
      <div>
        <div>{offer.id}</div>
        <div>{offer.title}</div>
        <div>{offer.description}</div>
      </div>
    </>
  );
}

export default OfferDetails;
