import React from 'react';
import Link from 'next/link'

export default function Header() {
  return (
    <div className="h-[10vh] border border-red-500 flex justify-center items-center w-full">
      <ul className="flex items-center justify-around w-full">
        <li className="text-lg cursor-pointer">
          <Link href="/">HOME</Link>
        </li>
        <li className="text-lg cursor-pointer">
          <Link href="/tasks">TASKS</Link> 
        </li>
        <li className="text-lg cursor-pointer">
          <Link href="/airdrops">AIRDROPS</Link>
        </li>
        <li className="text-lg cursor-pointer">
          <Link href="/login">LOGIN</Link> 
        </li>
      </ul>
    </div>
  );
}
