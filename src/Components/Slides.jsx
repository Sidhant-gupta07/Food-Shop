import React from 'react'
import Picks from './data/dataCopy';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slides = ({handleAdd}) => {

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
            <div className='w-[90%] mx-auto'>
                <p className=' flex, justify-center text-xl font-bold md:text-3xl text-green-600 pl-5'>What's in your Mind ?</p>
                <div className="py-20">
                <Slider {...settings}>
                        {Picks.map((item) => (
                            <div className='bg-white rounded-md' key={item.id}>
                                    <div className=' flex justify-center items-center rounded-t-xl'>
                                    <img
                                    src={item.image}
                                    alt=''
                                    className='w-[200px] rounded-full h-[200px] object-cover'
                                    />
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-2 p-4'>
                                        <p className='text-[15px] md:text-xl font-semibold uppercase'> {item.tittle} </p>
                                        <p className='text-[15px] md:text-xl font-semibold uppercase'> {item.price} </p>
                                        <button className='bg-red-700 w-[70px] md:w-[120px] py-2 md:py-3 px-2 md:px-5 text-[10px] md:text-[15px] text-white rounded-xl font-semibold mt-1 md:mt-2 mb-2 md:mb-1 hover:text-[grey]' onClick={handleAdd}>Add to Cart</button>
                                    </div>

                            </div>
                                    
                        ))}
                        </Slider>
                </div>
            </div>
        </>
    )
}

export default Slides;
