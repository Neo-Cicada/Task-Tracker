'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import PopUp from '@/components/PopUp';
import AirdropInfo from '@/components/AirdropInfo';
export default function Airdrops() {
  const [hoveredData, setHoveredData] = useState<any>(null);

  const dummyData = [
    {
      "id": "1",
      "name": "neo",
      "link": "www.facebook.com",
      "description": "lorem epsum",
      "platform": "Telegram",
      "network": "Solana",
      "requirements": ["This1", "This2", "This3"],
      "socials": {
        "twitter": "twitter.com",
        "discord": "discord.com",
        "telegram": "telegram.com"
      }
    },
    {
      "id": "2",
      "name": "lord",
      "link": "www.facebook.com",
      "description": "lorem epsum dorem moren awdawd tangina mo dutrer",
      "platform": "Telegram",
      "network": "Solana",
      "requirements": ["This1", "This2", "This3"],
      "socials": {
        "twitter": "twitter.com",
        "discord": "discord.com",
        "telegram": "telegram.com"
      }
    },
    {
      "id": "3",
      "name": "the",
      "link": "www.facebook.com",
      "description": "lorem epsum dorem moren awdawd tangina mo dutrer",
      "platform": "Galxe",
      "network": "Avax",
      "requirements": ["This1", "This2", "This3"],
      "socials": {
        "twitter": "twitter.com",
        "discord": "discord.com",
        "telegram": "telegram.com"
      }

    },
    {
      "id": "4",
      "name": "great",
      "link": "www.facebook.com",
      "description": "lorem epsum dorem moren awdawd tangina mo dutrer",
      "platform": "Telegram",
      "network": "Solana",
      "requirements": ["This1", "This2", "This3"],
      "socials": {
        "twitter": "twitter.com",
        "discord": "discord.com",
        "telegram": "telegram.com"
      }

    }
  ]
  const [isPopUp, setPopUp] = useState<boolean>(false);

  const componentData = dummyData.map(item => (
    <div
      key={item.id}
      className="flex items-center justify-around h-16 mx-24 border border-gray-600 rounded-md cursor-pointer"
      onClick={() => {
        setPopUp(!isPopUp);
        setHoveredData(item);

      }}
    >
      <div >{item.name}</div>
      <div >{item.network}</div>
    </div>
  ))
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
        {componentData}
      </div>
      <PopUp popUp={isPopUp} onClose={() => setPopUp(false)}>
        <div className='w-[70vw] h-[80vh] flex flex-col justify-start gap-10'>
          <div className='flex items-center justify-center'>
            <p className='text-3xl font-extrabold'>{hoveredData && hoveredData.name}</p>
          </div>
          <p>{hoveredData && hoveredData.description}</p>
          <p>{hoveredData && hoveredData.link}</p>
          <p>{hoveredData && hoveredData.platform}</p>
          {hoveredData && hoveredData.requirements.map((item: string) => <p key={item}> {item}</p>)}
        </div>
      </PopUp>
    </div>
  )
}
