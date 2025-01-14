'use client'
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./navLinks";
import Image from "next/image";
import { NavigationMenuDemo1 } from "./links";
import Link from "next/link";
import { useAppSelector } from "@/app/store/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div>
      <div className="navbar bg-myWhite text-myBlackHead flex justify-between mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-0 text-2xl flex lg:hidden">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex lg:hidden"
            >
              <NavigationMenuDemo1 />
            </ul>
          </div>
          <Image src={"/pictures/New Thar Mobile.png"} alt="Logo" width={250} height={60} className="lg:flex hidden pl-4"/>
        </div>
        <div className="navbar-center">
        <Image src={"/pictures/New Thar Mobile.png"} alt="Logo" width={150} height={50} className="flex lg:hidden"/>

          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
          
          {/* Cart Itemm */}
          <Link href={'/cart'}>
      <div tabIndex={0} role="button" className="pr-4 cursor-pointer group">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 group-hover:hover:text-orange-500 duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cart.length>0 && <span className="badge badge-sm bg-orange-500 font-semibold indicator-item text-black group-hover:text-white group-hover:bg-black duration-300">{cart.length}</span>}
        </div>
      </div>
      </Link>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;