import React from "react";

function NavItems() {
  // const list2 = ["Country", "Search", "Help", "LogIn"];
  const list2 = [
    {
      id:1,
      name:"Country"
    },
    {
      id:2,
      name:"Search"
    },
    {
      id:3,
      name:"Help"
    },
    {
      id:4,
      name:"LogIn"
    },

  ]

  const listName2 = list2.map((l) => <li key={l.id}>{l.name}</li>);

  return (
         <ol className="flex space-x-14 font1">
           {listName2}
         </ol>
  )
}

export default NavItems;
