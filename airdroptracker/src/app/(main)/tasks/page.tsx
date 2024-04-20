import React from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
export default function tasks() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl p-4 mx-auto">
        <h1 className="relative z-10 font-sans text-lg font-bold text-center text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
          Join the waitlist
        </h1>
        <p></p>
        <p className="relative z-10 max-w-lg mx-auto my-2 text-sm text-center text-neutral-500">
          Welcome to Airdrop Tracker, the best transactional airdrop tracker service on the web.
          We provide reliable, scalable, and information for
          airdrop finders.
        </p>
        <input
          type="text"
          placeholder="hi@neo.in"
          className="relative z-10 w-full mt-4 border rounded-lg border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  )
}
