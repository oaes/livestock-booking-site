import BookNow from '@/components/homePage/BookNow';
import { getAnimalsData } from '@/lib/fetchData';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const AnimalDetailsPage =async ({params}) => {
    const {id} = await params;
    const animals = await getAnimalsData();
    const expectedAnimals = animals.find(animal => animal.id == id);
    console.log(expectedAnimals)
    return (
        <div className='my-20'>
            <h2 className='font-bold text-3xl text-center mb-8'>Healthy & Ready for Qurbani</h2>
            <div className='w-11/12 mx-auto'>
                <Card className='border border-purple-500 flex flex-row items-center gap-10'>
                <div>
                  <Image src={expectedAnimals.image} width={100} height={100} alt={expectedAnimals.name} className='w-full h-[64vh]'/>
                </div>
                <div> 
                  <h2 className='font-bold text-5xl text-center text-primary'>{expectedAnimals.name}</h2>
                  <div  className='flex justify-between gap-4 mt-8'>
                    <div className='space-y-2'>
                   <p className='text-xl text-gray-600 '>Price: {expectedAnimals.price}</p>
                   <p className='text-xl text-gray-600 '>Weight: {expectedAnimals.weight}</p>
                    <p className='text-xl text-gray-600 '>Age: {expectedAnimals.age}</p>
                  </div>
                  <div className='space-y-2'>
                   <p className='text-xl text-gray-600 '>Category: {expectedAnimals.category}</p>
                   <p className='text-xl text-gray-600 '>Breed: {expectedAnimals.Breed}</p>
                    <p className='text-xl text-gray-600 '>Location: {expectedAnimals.location}</p>
                  </div>
                  </div>
                  <p className='text-xl mt-6 text-gray-600'><span className='font-bold'>Description: </span>{expectedAnimals.description}</p>
                    <BookNow></BookNow>
                </div>
            </Card>
            </div>
        </div>
    );
};

export default AnimalDetailsPage;