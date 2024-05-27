import Link from "next/link";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
   return (
      <div className="flex justify-between items-center sm:px-12 md:px-24 px-4">
         <Link href="/" className="flex items-center justify-center">
            <h1 className="text-5xl">
               <span className="text-brand-blue">Memorize</span> Code
            </h1>
         </Link>
         <div className="flex items-center">
            <button className="bg-brand-blue text-white px-4 py-4 rounded-lg">
               Register
            </button>
         </div>
      </div>
   );
};
export default Navbar;
