import React from 'react'
import Link from 'next/link'
export default function Header() {
    return (
        <div className='w-full h-10'>
            <Link className="text-lg font-extrabold text-black" href="/">Home</Link>
            <Link className="text-lg font-extrabold text-black" href="/tasks">Tasks</Link>
            <Link className="text-lg font-extrabold text-black" href="/airdrops">Airdrops</Link>
            <Link className="text-lg font-extrabold text-black" href="/login">Login</Link>
        </div>
    )
}
