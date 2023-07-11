import React from "react";

function NavItems() {
  const list2 = ["Country", "Search", "Help", "LogIn"];
  const listName2 = list2.map((l) => <li>{l}</li>);

  return (
         <ol className="flex space-x-14 font1">
           {listName2}
         </ol>
  )
}

export default NavItems;
