import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

//TODO: reset the isOpen to false if the size of the screen changes or moves
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className='fixed left-0 z-20 w-full bg-white border border-red-500 h-1/2 top-25 md:hidden'>
            <div className='flex flex-col items-center justify-around h-full'>
                <Link
                    className="mb-4 text-lg font-extrabold text-black" href="/"
                    onClick={onClose}>
                    Home
                </Link>
                <Link
                    className="mb-4 text-lg font-extrabold text-black"
                    href="/tasks"
                    onClick={onClose}

                >
                    Tasks
                </Link>
                <Link
                    className="mb-4 text-lg font-extrabold text-black" href="/airdrops"
                    onClick={onClose}
                    >
                    Airdrops
                </Link>
                <Link
                    className="text-lg font-extrabold text-black" href="/login"
                    >
                    Login
                </Link>
            </div>
        </div>
    );
}
export default MobileMenu;