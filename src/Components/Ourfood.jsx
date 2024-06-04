import React from 'react';
import { mealData } from './data/dataCopy';

const Ourfood = ({handleAdd}) => {
    return (
        <>
            <div className='w-[90%] mx-aut0 mt-[100px]'>
                <div>
                    <h2 className='text-center text-[#fbc531] text-xl md:text-3xl font-bold py-3 md:py-7'>Our Food</h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3'>
                    {
                        mealData.map((meal) => (
                            <div className='flex justify-center flex-col items-center px-3' key={meal.id}>
                                <div>
                                    <img
                                        src={meal.image}
                                        alt=''
                                        className='w-[200px] h-[200px] rounded-lg object-cover'
                                    />
                                </div>
                                <div className='flex justify-center py-2 px-4 flex-col items-center'>
                                    <p className='text-[15px] md:text-xl font-semibold uppercase'>{meal.name}</p>
                                    <p className='text-[15px] md:text-xl font-semibold uppercase'>{meal.price}</p>
                                    <button className='bg-black w-[70px] md:w-[120px] py-2 md:py-3 px-2 md:px-5 text-[10px] md:text-[15px] text-white rounded-xl font-semibold mt-1 md:mt-2 mb-2 md:mb-1 hover:text-[#fbc531]' onClick={handleAdd}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Ourfood;
