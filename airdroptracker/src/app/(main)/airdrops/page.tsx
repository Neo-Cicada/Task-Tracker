import React from 'react'
import Image from 'next/image';

export default function airdrops() {

  return (
    <div className='h-[90vh] border border-gray-600 p-9'>
      {/* List of project,names, links, funding, steps, requirements, date started,  TGE */}
      {/* sort by date, tg, gamefi, lp, and galxe */}
      <div className='flex w-full'>
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
      <div className='flex flex-col items-center gap-10 mt-5'>
        <div className='border border-gray-600 h-[100px] w-[80%] rounded-md'>
          qweqwes
        </div>
        <div className='border border-gray-600 h-[100px] w-[80%] rounded-md'>
          qweqwes
        </div>
        <div className='border border-gray-600 h-[100px] w-[80%] rounded-md'>
          qweqwes
        </div>
      </div>

    </div>
  )
}
