import React from 'react'
import Image from 'next/image';
export default function airdrops() {

  return (
    <div className='h-[90vh] border border-red-500 p-9'>
      {/* List of project,names, links, funding, steps, requirements, date started,  TGE */}
      {/* sort by date, tg, gamefi, lp, and galxe */}
      <div className='flex w-full border border-red-500'>
        <div className='w-1/2'>Airdrops</div>
        <div className='flex justify-end w-1/2 gap-4 border border-red-500'>
          <div>sort</div>
          <div>search</div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-10 mt-5'>
        <div className='border border-red-500 h-[100px] w-[80%]'>
          qweqwes
        </div>
        <div className='border border-red-500 h-[100px] w-[80%]'>
          qweqwes
        </div>
        <div className='border border-red-500 h-[100px] w-[80%]'>
          qweqwes
        </div>
      </div>

    </div>
  )
}
