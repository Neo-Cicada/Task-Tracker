import React from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function airdrops() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    
      <div className="max-w-2xl p-4 mx-auto">
        <h1 className="relative z-10 font-sans text-lg font-bold text-center text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
          Join the waitlist
        </h1>
      </div>
      <BackgroundBeams />
    </div>
  )
}
