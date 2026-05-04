import {getAnimalsData} from "../../lib/fetchData";
import React from 'react';
import AnimalCard from './AnimalCard';

const Featured = async() => {
    const allAnimals = await getAnimalsData();
    console.log(allAnimals);
    const animals = allAnimals.slice(0,4);
    return (
       <div className='my-20 w-11/12 mx-auto'>
            <h1 className=' font-bold text-4xl text-center'>Featured animals</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-10'>
                {
                    animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default Featured;