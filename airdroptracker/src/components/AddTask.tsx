import React from 'react';

export default function AddTask() {
    

    return (
        <div className="flex flex-col max-w-sm p-4 mx-auto mt-10 space-y-4 bg-gray-100 rounded-md shadow-md">
            <div>
                <label className="block mb-1 text-gray-700">Project Title</label>
                <input
                    type="text"
                    placeholder="Project Title"
                    className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block mb-1 text-gray-700">Start Date</label>
                <input
                    type="date"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block mb-1 text-gray-700">End Date</label>
                <input
                    type="date"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}
