import React from 'react'

function Navlist() {

    const list = ['Explore','Book','Experience','Blog']
    const listName = list.map((l)=> <li>{l}</li> )
     

  return (
        <ol className='flex space-x-14 font1'>
            {listName}
        </ol>
  )
}

export default Navlist