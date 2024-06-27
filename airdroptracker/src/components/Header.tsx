"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import Burger from '../../public/menu-burger-horizontal.svg'
import BurgerX from '../../public/burgerX.svg'
import Image from 'next/image'
export default function Header() {
    const [isBurger, setBurger] = useState<boolean>(false);

    return (
        <>
            <div className='hidden md:border md:border-red-500 md:flex md:items-center md:justify-around md:w-full md:h-16'>
                <Link className="text-lg font-extrabold text-black" href="/">Home</Link>
                <Link className="text-lg font-extrabold text-black" href="/tasks">Tasks</Link>
                <Link className="text-lg font-extrabold text-black" href="/airdrops">Airdrops</Link>
                <Link className="text-lg font-extrabold text-black" href="/login">Login</Link>
            </div>

            <div className='border border-red-500 h-[10vh] w-full flex md:hidden' >
                <div className='h-full w-[70%] flex justify-start items-center'>
                    <p className='pl-4 text-3xl font-medium'>Airdrop Tracker</p>
                </div>
                <div className='relative h-full w-[30%] border border-red-500'>
                    <div className='absolute inset-0 w-[60%] h-[60%] m-auto cursor-pointer'
                        onClick={() => setBurger(!isBurger)}>
                        {isBurger ?
                            <div className={`transition-opacity duration-500 ${isBurger ? 'opacity-100' : 'opacity-0'}`}>
                                <Image alt='cancel button' src={BurgerX} layout='fill' objectFit='cover' />
                            </div>
                            :
                            <div className={`transition-opacity duration-500 absolute inset-0 ${isBurger ? 'opacity-0' : 'opacity-100'}`}>
                                <Image alt='menu button' src={Burger} layout='fill' objectFit='cover' />
                            </div>
                        }
                    </div>
                </div>


            </div>


        </>
    )
}
