import React from "react";
import { useParams } from "react-router-dom";
import offers from "./offers";

function OfferDetails() {
  const { id } = useParams(); // Get the item id from the URL params
  const offer = offers.find((l) => l.id == id);

  return (
    <>
      <div>
        <div>{offer.title}</div>

        <div>
          <div>Highlight</div>
          <div>
            <span>{offer.coupon}</span>
            <span>{offer.discount}</span>
            <span>{offer.validity}</span>
          </div>
        </div>

        <div>
          <div>
            <ul>
              {offer.about.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferDetails;
