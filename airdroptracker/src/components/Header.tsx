"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
    return (
        <div className="relative flex items-center justify-center w-full">
            <Navbar className="top-1 " />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link className="text-lg font-extrabold text-black" href="/">Home</Link>
                <Link className="text-lg font-extrabold text-black" href="/tasks">Tasks</Link>
                <Link className="text-lg font-extrabold text-black" href="/airdrops">Airdrops</Link>
                <Link className="text-lg font-extrabold text-black" href="/login">Login</Link>

            </Menu>
        </div>
    );
}
