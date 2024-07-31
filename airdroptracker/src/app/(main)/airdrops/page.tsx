'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import PopUp from '@/components/PopUp';
export default function Airdrops() {
  const [isPopUp, setPopUp] = useState<boolean>(false);
  return (
    <div className='flex flex-col h-[90vh] p-9 gap-4'>
      {/* List of project,names, links, funding, steps, requirements, date started,  TGE */}
      {/* sort by date, tg, gamefi, lp, and galxe */}
      <div className='flex justify-between mx-24'>
        <div className='w-1/2'>Airdrops</div>
        <div className='flex justify-end w-1/2 gap-4'>
          <div className='cursor-pointer'>sort</div>
          <div>
            <input
              className='text-black border border-gray-600 w-36'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 '>
        <div
          className="flex items-center justify-around h-16 mx-24 border border-gray-600 rounded-md cursor-pointer"
          onClick={()=>setPopUp(!isPopUp)}
        >
          <div >name</div>
          <div >name</div>
        </div>
        <div
          className="flex items-center justify-around h-16 mx-24 border border-gray-600 rounded-md cursor-pointer"
        >
          <div >name</div>
          <div >name</div>
        </div>
        <div
          className="flex items-center justify-around h-16 mx-24 border border-gray-600 rounded-md cursor-pointer"
        >
          <div >name</div>
          <div >name</div>
        </div>
      </div>
      <PopUp popUp={isPopUp} onClose={() => setPopUp(false)}>
        hello
      </PopUp>
    </div>
  )
}
