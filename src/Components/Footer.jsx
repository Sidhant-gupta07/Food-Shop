import React from 'react'
import Playstore from '../assets/Img/play_store.avif'
import appStore from '../assets/Img/app_store.avif'
const Footer = () => {
    return (
        <div className='w-full bg-[#02060c] text-white'>
            <div className='grid-cols-4 flex justify-around md-[grid-cols-4, flex, justify-around] p-6 gap-2'>
                <div>
                    <p className='text-[10px] font-semibold pb-2 md:text-xl md:font-semibold md:pb-4'>Food<span className='text-[#ffb703]'>Shop</span></p>
                    <p className='text-[7px] md:text-[15px] mb-2'>© 2024 Bundl Technologies Pvt. Ltd</p>
                    <div>
                    <img src={Playstore} alt="img" className='w-[70px] p-1 md:w-[100px] md:p-2' />
                    <img src={appStore} alt="Img"  className='w-[70px] p-1 md:w-[100px] md:p-2'/>
                </div>
                </div>

                <div>
                    <p className='text-[10px] font-bold pb-2 md:text-xl md:font-bold md:pb-4'>Company</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>About</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Career</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Team</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Swiggy One</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Swiggy Instamart</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Seiggy Genie</p>
                </div>

                <div>
                    <p className='text-[10px] font-bold pb-2 md:text-xl md:font-bold md:pb-4'>Contact Us</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Help & Support</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Partner with us</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Ride with us</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Team</p>
                </div>

                <div>
                    <p className='text-[10px] font-bold pb-2 md:text-xl md:font-bold md:pb-4'>We Delivered to:</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Banglore</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Gurugram</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Hyderabad</p>
                    <p className='text-[7px] md:text-[15px] mb-2'>Odisha</p>
                    <input type="text" placeholder='589 Cities' className='w-[45px] text-[10px] md:w-[110px] md:text-xl rounded-sm '/>
                </div>
            </div>
        </div>
    )
}

export default Footer