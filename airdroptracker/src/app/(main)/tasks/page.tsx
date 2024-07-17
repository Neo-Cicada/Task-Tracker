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
      "tasks": ["Task 1", "Task 2", "Task 3"],
      "dateStarted": "2023-01-01T00:00:00.000Z",
      "dateEnded": "2023-01-10T00:00:00.000Z"
    },
    {
      "id": 2,
      "name": "Bob",
      "tasks": ["Task 4", "Task 5"],
      "dateStarted": "2023-01-02T00:00:00.000Z",
      "dateEnded": "2023-01-11T00:00:00.000Z"
    },
    {
      "id": 3,
      "name": "Charlie",
      "tasks": ["Task 6", "Task 7", "Task 8", "Task 9"],
      "dateStarted": "2023-01-03T00:00:00.000Z",
      "dateEnded": "2023-01-12T00:00:00.000Z"
    },
  ]
  const ComponentData = dummyData.map((item) => (
    <div
      key={item.id}
      onClick={() => {
        setHoveredData(item);
        setInfo(!isInfo);
      }}
      className="flex items-center justify-between h-16 border border-gray-600 rounded-md cursor-pointer"
    >
      <div>{item.name}</div>
      <div>task</div>
      <div>{item.dateStarted}</div>
      <div>{item.dateEnded}</div>
    </div>
  ));
  return (
    <div className='flex flex-col h-[90vh] p-9 gap-4'>
      <div className='flex justify-between '>
        <div >
          <p>Projects</p>
        </div>
        <button className='w-24 border border-gray-600 rounded-md' onClick={() => setPopUp(!isPopUp)}> Add task</button>
      </div>

      {ComponentData}
      <PopUp popUp={isInfo} onClose={() => setInfo(false)}>
        hello
        {hoveredData && hoveredData.name}
      </PopUp>
      <PopUp popUp={isPopUp} onClose={() => setPopUp(false)}>
        <div className='w-[90vh] h-[80vh]'>
          <AddTask />
        </div>
      </PopUp >
    </div>
  )
}
