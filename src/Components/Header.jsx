import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = ({count}) => {
    const [sideNav, setSideNav] = useState(false)
    


  return (
    <div className='fixed z-50 w-full bg-white top-0 left-0'>
    <div className='flex justify-between py-5 px-6 border-b text-lg font-semibold'>
        <div>
            <Link to="/">
            <p className='cursior-pointer'>Food<span className='text-[#ffb703]'>Shop</span></p>
            </Link>
        </div>
        <div>
            <ul className='sm:flex gap-4 hidden cursior-pointer'>
                <Link to='/'>
                    <li className='hover:text-[#ffb703]'>Home</li>
                </Link>
                <Link to='/ourfood'>
                    <li className='hover:text-[#ffb703]'>our Food</li>
                </Link>
                <Link to='/aboutus'>
                    <li className='hover:text-[#ffb703]'>About Us</li>
                </Link>
                <Link to='/signin'>
                    <li className='hover:text-[#ffb703]'>Sign In</li>
                </Link>
            </ul>
        </div>
        {sideNav ? (
            <div className='absolute top-0 right-0 bg-[#ffffffe5] w-[300px] h-[100vh] flex items-center justify-center rounded z-10'>
    <IoClose 
      size={30} 
      className='absolute top-3 right-2'  
      onClick={() => { setSideNav(!sideNav) }}
      />
    <ul className='flex gap-12 cursor-pointer flex-col'>
                <Link to='/'>
                    <li className='hover:text-[#ffb703]'onClick={() => { setSideNav(!sideNav) }}>Home</li>
                </Link>
                <Link to='/ourfood'>
                    <li className='hover:text-[#ffb703]'onClick={() => { setSideNav(!sideNav) }}>our Food</li>
                </Link>
                <Link to='/aboutus'>
                    <li className='hover:text-[#ffb703]'onClick={() => { setSideNav(!sideNav) }}>About Us</li>
                </Link>
                <Link to='/signin'>
                    <li className='hover:text-[#ffb703]'onClick={() => { setSideNav(!sideNav) }}>Sign In</li>
                </Link>
    </ul>
  </div>
) : (
    ""
)}


        <div className='flex gap-4'>
        <p className='cursior-pointer block sm:hidden text-2xl' onClick={()=>{setSideNav(!sideNav)}}><RxHamburgerMenu/></p>
        <p>{count}<FaCartShopping size={30}/></p>
        </div>
    </div>
</div>
  )
}

export default Header