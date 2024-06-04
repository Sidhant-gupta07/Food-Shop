import React from 'react'
import { Link } from 'react-router-dom';

const Delivery = () => {
  return (
    <>
    <div className='w-full py-7 md:py-16 px-2 md:px-4'>
        <h3 className='text-[#ffb703] font-bold text-[15px] md:text-2xl text-center'>Quick Delivery App</h3>
        <div className='grid grid-cols-2 w-[70%] mx-auto'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off" alt=" mobile-phone"/>
            <div className='flex flex-col justify-center'>
            <p  className='text-[20px] md:text-[40px] text-green-600 font-bold pb-1 md:pb-2'>Get the App</p>
            <h2 className='text-[10px] md:text-[20px] font-semibold'>The Fastest Food Delivery in India</h2>
            <Link to="/signin">
            <button className='bg-red-700 w-[80px] md:w-[150px] py-1 md:py-3 px-2 md:px-5 text-[10px] md:text-[15px] text-white rounded-xl font-semibold mt-1 md:mt-2 hover:text-[grey]'>Sign-in Now!</button>
            </Link>
        </div>
        </div>
    </div>
    </>
  );
}

export default Delivery