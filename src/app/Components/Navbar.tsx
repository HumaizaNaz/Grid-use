'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; 
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Humaiza
          </span>
        </Link>

        {/* Mobile Hamburger Icon */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <FaTimes size={24} className="text-gray-500" />
          ) : (
            <FaBars size={24} className="text-gray-500" />
          )}
        </button>

        {/* Desktop & Mobile Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } w-full md:block md:w-auto md:flex-row md:space-x-8 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-white   `}
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="#style1"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >
              Style-1
              </Link>
            </li>
            <li>
              <Link
                href="#style02"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
               Style-2
              </Link>
            </li>
            <li>
              <Link
                href="#style03"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Style-3
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
