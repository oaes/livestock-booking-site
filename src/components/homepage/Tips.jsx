import { Card } from '@heroui/react';
import React from 'react';
import { BiLeaf } from 'react-icons/bi';
import { CgCrown } from 'react-icons/cg';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { LuBicepsFlexed, LuHeartHandshake } from 'react-icons/lu';

const Tips = () => {
    return (
        <div className='bg-purple-700 text-white p-20'>
            <h2 className='text-5xl font-bold text-center mb-10'>Qurbani Tips and Top Breeds</h2>
            <div className='flex  justify-between gap-8 px-6 '>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-center'>Quick checks for a healthy choice</h2>
                    <Card className=''>
                      <div className='flex items-center  gap-2'>
                        <IoCheckmarkCircleOutline className='text-purple-600 text-2xl' />
                        <h3 className='text-black font-bold text-lg'>Age Verification : </h3>
                        <p className='text-black text-lg'>Ensure the animal is at least 2 years old (Cattle) or 1 year (Goat)</p>
                      </div>
                      <div className='flex  gap-2'>
                        <IoCheckmarkCircleOutline className='text-purple-600 text-2xl' />
                        <h3 className='text-black font-bold text-lg'>Health & Vitality : </h3>
                        <p className='text-black text-lg'>Look for an active animal with bright eyes and a shiny coat</p>
                      </div>
                      <div className='flex  gap-2'>
                        <IoCheckmarkCircleOutline className='text-purple-600 text-2xl' />
                        <h3 className='text-black font-bold text-lg'>Physical Integrity : </h3>
                        <p className='text-black text-lg'>Ensure the animal is healthy and free from defects.No injuries.</p>
                      </div>
                      <div className='flex  gap-2'>
                        <IoCheckmarkCircleOutline className='text-purple-600 text-2xl' />
                        <h3 className='text-black font-bold text-lg'>Natural Growth : </h3>
                        <p className='text-black text-lg'>Choose naturally-fed animals with solid muscle over bloated growth</p>
                      </div>
                    </Card>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-center'>Top Breeds</h2>
                    <Card>
                        <div className='flex items-center  gap-2'>
                        <LuBicepsFlexed className='text-purple-600 text-2xl' />
                        <h3 className='text-black font-bold text-lg'>Brahman : </h3>
                        <p className='text-black text-lg'>Massive build, heat-resistant, and high meat yield.</p>
                      </div>
                        <div className='flex items-center  gap-2'>
                        <LuHeartHandshake className='text-purple-600 text-2xl' />
                        <h3 className='text-black font-bold text-lg'>Sahiwal : </h3>
                        <p className='text-black text-lg'>Calm temperament with high-quality, low-fat meat.</p>
                      </div>
                        <div className='flex items-center  gap-2'>
                        <CgCrown className='text-purple-600 text-2xl' />
                        <h3 className='text-black font-bold text-lg'>Mirkadim : </h3>
                        <p className='text-black text-lg'>Famous for white coat and  tender meat.</p>
                      </div>
                        <div className='flex items-center  gap-2'>
                        <BiLeaf className='text-purple-600 text-2xl' />
                        <h3 className='text-black font-bold text-lg'>Desi : </h3>
                        <p className='text-black text-lg'>Natural taste, organic growth, and widely available.</p>
                      </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Tips;