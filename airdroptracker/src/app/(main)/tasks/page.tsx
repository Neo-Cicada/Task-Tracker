'use client'
import AddTask from '@/components/AddTask';
import PopUp from '@/components/PopUp';
import { useState } from 'react'
import React from 'react'

export default function Tasks() {
  const [isPopUp, setPopUp] = useState<boolean>(false);
  const [isInfo, setInfo] = useState<boolean>(false);
  const [hoveredData, setHoveredData] = useState<any>(null);
  const dummyData = [
    {
      "id": 1,
      "name": "Alice",
      "link": "www.facebook.com",
      "tasks": ["Task 1", "Task 2", "Task 3"],
      "dateStarted": "2023",
      "tge": "2023",
      "note": "metamask wallet"
    },
    {
      "id": 2,
      "name": "Bob",
      "link": "www.facebook.com",
      "tasks": ["Task 1", "Task 2", "Task 3"],
      "dateStarted": "2023",
      "tge": "2023",
      "note": "metamask wallet 2"
    },
    {
      "id": 3,
      "name": "Charlie",
      "link": "www.facebook.com",
      "tasks": ["Task 1", "Task 2", "Task 3"],
      "dateStarted": "2023",
      "tge": "2023",
      "note": "metamask wallet 3"
    },
  ]
  const ComponentData = dummyData.map((item) => (
    <div
      key={item.id}
      onClick={() => {
        setHoveredData(item);
        setInfo(!isInfo);
      }}
      className="flex items-center justify-around h-16 mx-24 border border-gray-600 rounded-md cursor-pointer"
    >
      <div >{item.name}</div>
      <div >{item.link}</div>
    </div>
  ));
  return (
    <div className='flex flex-col h-[90vh] p-9 gap-4'>
      <div className='flex justify-between mx-24'>
        <div >
          <p>Projects</p>
        </div>
        <button className='w-24 border border-gray-600 rounded-md' onClick={() => setPopUp(!isPopUp)}> Add task</button>
      </div>
      <div className='flex flex-col gap-3 '>
        {ComponentData}
      </div>
      <PopUp popUp={isInfo} onClose={() => setInfo(false)}>
        <div className='w-[70vw] h-[80vh] flex flex-col justify-start gap-10'>
          <div className='flex justify-center items-center'>
            <p className='text-3xl font-extrabold'>{hoveredData && hoveredData.name}</p>
          </div>
          <div>
            <p className='text-center text-2xl font-bold'>Tasks</p>
            {hoveredData && hoveredData.tasks.map((item: string) => (
              <div className="flex items-center pt-4" key={item}>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
                  readOnly
                />
                <p className="ml-2">{item}</p>
              </div>
            ))}          </div>
          <div>
            <p className='text-center text-2xl font-bold'>Notes</p>
            <p>{hoveredData && hoveredData.note}</p>
          </div>

        </div>
      </PopUp>
      <PopUp popUp={isPopUp} onClose={() => setPopUp(false)}>
        <div className='w-[90vh] h-[80vh]'>
          <AddTask />
        </div>
      </PopUp >
    </div>
  )
}
