import React from 'react'
import Logo from "../logo/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCartAlt } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center shadow-md">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex text-gray-800 gap-5">
        <Link to="cart" className="relative">
          <BiCartAlt size={25} />
          <span className="block w-3 h-3 absolute text-gray-50 bg-gray-800 top-0 right-0 rounded-full text-[8px] text-center font-bold">
            0
          </span>
        </Link>
        <Link to="wishlist" className="relative">
          <MdFavoriteBorder size={25} />
          <span className="block w-3 h-3 absolute text-gray-50 bg-gray-800 top-0 right-0 rounded-full text-[8px] text-center font-bold">
            0
          </span>
        </Link>
        <div className="visible md:hidden cursor-pointer">
          <GiHamburgerMenu size={25} />
        </div>
      </div>
    </div>
  );
}

export default Header
