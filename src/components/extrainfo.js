import React from 'react'
import { Button } from '@mui/material'


export default function Extrainfo({id,name,quanity,total,price,img}) {


  /*
  <div className=' bg-[#353535] w-full flex justify-between text-[white] rounded-[10px]'>
      <div className=' flex w-full md:justify-between px-2'>

      <div className='  w-[100px] h-[100px] flex justify-center items-center'>
        <img src={`../images/${img}`} className='w-[80px] h-[80px] object-cover rounded-[20px]'/>
        </div>

      <div className='p-3 flex w-full  justify-between h-[80px]'>
        <div>
        <p className=' lg:text-xl'>{name}</p>

        <div className=' flex'>
          <button>-</button>
          <p>{quanity}</p>
          <button>+</button>

        </div>
        </div>

        <div className=' flex flex-col justify-between h-full'>
        <p>{total}</p>
        <button>Del</button>
        

      </div>

        

      </div>

              <div className=' w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
            {data}
   

                

    </div>


      </div>
  */ 

  return (
  
    <div className=' w-full p-1 px-2 rounded-lg flex items-center gap-2 scroll'>
    <img src={`../images/pizza1.jpg`} className='w-[80px] h-[80px] object-cover rounded-[20px] scroll'/>
    <div className=' flex flex-col gap-2'>
     <p className=' text-base text-[white]'>
         {name}
     </p>
     <p className='text-sm block text-white font-semibold'>
         Ghc {price}
     </p>
     </div>
     <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
         <button>
             +

         </button>
         <p className='w-5 h-5 rounded-sm flex text-white items-center'>{quanity}</p>
         <button>
             -
         </button>
     </div>
     </div>

    


    
  )
}
