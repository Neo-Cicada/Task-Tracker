'use client'
import AddTask from '@/components/AddTask';
import PopUp from '@/components/PopUp';
import { useState } from 'react'
import React from 'react'

export default function Tasks() {
  const [isPopUp, setPopUp] = useState<boolean>(false);

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
  const ComponentData = dummyData.map(i => <>
    <div className='flex items-center justify-between h-16 border border-gray-600 rounded-md cursor-pointer'>
      <div>{i.name}</div>
      <div>task</div>
      <div>{i.dateStarted}</div>
      <div>{i.dateEnded}</div>
      <div></div>
    </div>
  </>)
  return (
    <div className='flex flex-col h-[90vh] border border-gray-600 p-9 gap-4'>
      <div className='flex justify-between '>
        <div >
          <p>Projects</p>
        </div>
        <button className='w-24 border border-gray-600 rounded-md' onClick={() => setPopUp(!isPopUp)}> Add task</button>
      </div>

      {ComponentData}
      <PopUp popUp={isPopUp} onClose={() => setPopUp(false)}>
        <div className='w-[90vh] h-[80vh] border border-red-500'>
          <AddTask/>
        </div>
      </PopUp >
    </div>
  )
}
