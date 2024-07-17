import React from 'react';

export default function AddTask() {
    return (
        <div className="flex flex-col max-w-sm p-4 mx-auto mt-10 space-y-4 overflow-y-auto bg-gray-100 rounded-md shadow-md max-h-[420px]">
            
            <div className='flex flex-col'>
                <label className="block mb-1 text-gray-700">Project Title</label>
                <input
                    type="text"
                    placeholder="Project Title"
                    className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className='flex flex-col'>
                <label className="block mb-1 text-gray-700">Project Link</label>
                <input
                    type="text"
                    placeholder="Project Link"
                    className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className='flex flex-col space-y-2'>
                <label className="block mb-1 text-gray-700">Tasks</label>
                <input
                    type="text"
                    placeholder="Task"
                    className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className='px-4 py-2 text-black bg-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    Add Task
                </button>
            </div>
            <div className='flex flex-col'>
                <label className="block mb-1 text-gray-700">Token Generation Event</label>
                <input
                    type="date"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className='flex flex-col'>
                <label className="block mb-1 text-gray-700">Note</label>
                <textarea
                    aria-label='notes'
                    className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}
