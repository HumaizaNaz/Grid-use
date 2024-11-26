// 'use client';

// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navebar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Toggle the mobile menu
//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Close the mobile menu when a link is clicked
//   const closeMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (


//     <nav className="bg-neutral-500 text-black p-4">
//       <div className="container mx-auto p-4 max-w-screen-xl grid grid-cols-3 md:grid-cols-4 justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-lg font-bold col-span-1">
//           Humaiza
//         </Link>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden flex justify-end col-span-1">
//           <button onClick={toggleMenu} className="text-white">
//             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul
//           className={`md:flex space-x-4 col-span-2 ${isMobileMenuOpen ? 'flex-col absolute bg-neutral-600 w-full left-0 top-16 p-4' : 'hidden md:flex'}`}
//         >
//           <li>
//             <Link href="/" className="hover:text-gray-200" onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:text-gray-200" onClick={closeMenu}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/services" className="hover:text-gray-200" onClick={closeMenu}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-gray-200" onClick={closeMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
// );
// };

// export default Navebar;
