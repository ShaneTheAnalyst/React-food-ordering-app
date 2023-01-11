import React from 'react'
import Nav from './Nav'
import fooddata from '../fooddata.js'
import Food from './foodcomp'

export default function Main() {
console.log(fooddata);

  const foodD= fooddata.map((item,index)=>{
    return <Food key={index} id={item.id} name={item.name} price={item.price} img={item.img}/>
  })

  return (
    <div >
        <Nav/>
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 px-3 items-center'>
      {foodD}
      </div>
    </div>
  )
}
