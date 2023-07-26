import React from "react";

function Subscribebtn() {
  const handleClick = (e) => {
    e.preventdefault();
    e.alert();
  };
  return (
    <div class="flex space-x-2 justify-center mt-4 mr-2 items-center">
      <button
        onClick={(e) => {
          alert("Subscribed Sucessfully !");
        }}
        className=" font-semibold px-7 py-4 bg-yellow-400  rounded-lg text-lg font1 effect'"> Subcsribe
      </button>
    </div>
  );
}

export default Subscribebtn;
