import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';


const Banner = () => {
    return (
        <div
  className="mt-6 w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[75vh] 
  bg-[url('/images/banner.png')] bg-cover bg-center bg-no-repeat 
  flex items-center justify-center rounded-lg shadow-2xl px-4"
>
  <div className="space-y-4 text-center">
    
    <button className="btn btn-primary text-base md:text-lg lg:text-xl">
      <Link
        href="/all-animals"
        className="flex gap-2 items-center text-white animate__animated animate__pulse animate__infinite"
      >
        Book Your Animals <FiArrowUpRight />
      </Link>
    </button>

  </div>
</div>
    );
};

export default Banner;