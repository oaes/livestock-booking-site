import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';


const Banner = () => {
    return (
        <div className="mt-6 bg-[url('https://static.vecteezy.com/system/resources/previews/024/230/442/non_2x/islamic-background-for-eid-al-adha-with-mosque-mandala-cow-and-goat-icons-banner-template-with-empty-space-for-text-qurban-day-illustration-free-vector.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
            
               
                <div className=' mx-auto space-y-2 text-center'>
                    <h2 className='font-bold text-5xl'>QurbaniHat</h2>
                    <h2 className='font-bold text-5xl'> Livestock Booking Platform</h2>
                    <p className='text-lg'>Explore verified cows and goats for Qurbani with<br></br> a smooth and secure booking experience.</p>
                    <button className='btn  btn-primary text-xl mt-2'><Link href={'/all-animals'} className='flex gap-2 items-center  text-white animate__animated animate__pulse animate__infinite'>Browse Animals <FiArrowUpRight /></Link></button>
                </div>
        </div> 
    );
};

export default Banner;