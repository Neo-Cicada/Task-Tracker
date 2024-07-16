"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Burger from '../../public/menu-burger-horizontal.svg';
import BurgerX from '../../public/burgerX.svg';
import Image from 'next/image';
import MobileMenu from './mobile/MobileMenu';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isBurger, setBurger] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <>
            <div className='sticky top-0 z-40 hidden md:bg-gray-800 md:border-gray-600 md:flex md:items-center md:justify-around md:w-full md:h-16'>
                <Link className={`text-lg font-extrabold 
                    ${pathname === '/' ? 'text-white' : 'text-gray-300'}`}
                    href="/">
                    Home
                </Link>
                <Link className={`text-lg font-extrabold 
                    ${pathname === '/tasks' ? 'text-white' : 'text-gray-300'}`}
                    href="tasks">
                    Tasks</Link>
                <Link className={`text-lg font-extrabold 
                    ${pathname === '/airdrops' ? 'text-white' : 'text-gray-300'}`}
                    href="airdrops">
                    Airdrops</Link>
                <Link className="text-lg font-extrabold text-gray-300" aria-disabled href="#">Login</Link>
            </div>

            <div className='border-b border-gray-200 h-[10vh] w-full flex md:hidden'>
                <div className='h-full w-[70%] flex justify-start items-center'>
                    <p className='pl-4 text-3xl font-medium'>Airdrop Tracker</p>
                </div>
                <div className='relative h-full w-[30%]'>
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
            {isBurger && <MobileMenu isOpen={isBurger} onClose={() => setBurger(!isBurger)} />}
        </>
    );
}
