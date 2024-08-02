"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

const Header = () => {
    const { user } = useUser();

    return (
        <div>
            <header className="text-gray-400 bg-secondary body-font shadow-md">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <Image src={'/attendo-logo.png'} alt='logo' width={25} height={25} />
                        <span className="ml-3 text-xl logo-text">Attendo</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <Link href={'/dashboard'}><p className="mr-5 hover:text-white cursor-pointer">Dashboard</p></Link>
                        <p className="mr-5 hover:text-white cursor-pointer">Contact</p>
                        <p className="mr-5 hover:text-white cursor-pointer">How?</p>
                        <p className="mr-5 hover:text-white cursor-pointer">About</p>
                    </nav>
                    {
                        user ? (
                            <UserButton />
                        ) : (
                            <Link href={'/dashboard'}>
                                <Button>
                                    Get Started
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Button>
                            </Link>
                        )
                    }
                </div>
            </header>
        </div>
    )
}

export default Header