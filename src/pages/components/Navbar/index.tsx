import React from "react";
import Link from 'next/link';
import { Anton } from 'next/font/google';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
    <div className="flex flex-wrap items-center justify-between mr-20 ml-20 p-10">
      <Link href="/" className="flex items-center">
        <img className="h-24 mr-6 block" src="/Convaultify.png" alt="Logo" />
        <span className={`self-center ${anton.className} text-4xl whitespace-nowrap`}>Convaultify</span>
      </Link>
      <ConnectButton />
    </div>
  </nav>
  );
};
export default Navbar;