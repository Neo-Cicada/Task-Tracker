import React from 'react'
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center p-8 bg-white border border-gray-300 rounded-lg shadow-lg w-96">
        <h2 className="mb-6 text-2xl font-bold text-black">Login</h2>
        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            id="email"
            className="block w-full px-3 py-2 mt-1 text-black placeholder-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="block w-full px-3 py-2 mt-1 text-black placeholder-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <Link href="/">
          <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </Link>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account? <Link href="/register" className="text-indigo-600 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  )
}
