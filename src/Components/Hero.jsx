import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Hero = () => {
    const [slider, setSlider] = useState(0);
    const handleMinus = ()=> {
        setSlider(slider === 0?imgData.length-1:slider - 1)
    }
    const handlePlus = ()=> {
        setSlider(slider === imgData.length-1? 0:slider + 1)
    }

    useEffect(()=>{
    const slideClear = setInterval(()=>{
        handlePlus();
    },2000)
    return() => clearInterval(slideClear)
    },[slider])

    const imgData = [
        {
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
        }
    ]
  return (
   <>
    <div>
        <div className='w-[90%] mx-auto h-[80vh] my-5 relative mt-[100px]'>
            {
                imgData.map((item, i)=>(
                    <div key={i} className={`${slider === i ? "block":"hidden"}`}>
                    <img src={item.url} alt="image" className='w-full h-[80vh] rounded-2xl object-cover'/>
                </div>
                ))
            }
            <div className='w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl'></div>
            <div className='flex justify-between w-full px-5 top-[50%] absolute text-white'>
            <FaAngleLeft  size={30} onClick={handleMinus} className="cursior-pointer"/>
            <FaAngleRight size={30} onClick={handlePlus}  className="cursior-pointer"/>
            </div>
        </div>
        
        </div>
   </>
  )
}

export default Hero




// https:// res.cloudinary.com/ehizeek-shop/image/upload/v1672672612/NetflixApp/ric_