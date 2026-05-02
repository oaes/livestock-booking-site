import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaWeight } from 'react-icons/fa';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const AnimalsCard = ({animal}) => {
    console.log(animal);
    return (
        <div>
           <Card className='border border-purple-500 rounded-2xl'>
             <div className='relative aspect-square'>
                 <Image
                 src={animal.image}
                 alt={animal.name}
                 fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 className='object-cover rounded-2xl'
                 />
                     <Chip size='md' className='absolute right-1 top-1 text-purple-700'>{animal.category}</Chip>
                </div>
                <div className='space-y-2'>
                    <h2 className='font-bold text-xl'>{animal.name}</h2>
                    <div className='flex justify-between items-center gap-4'>
                         <p className={'text-lg flex justify-between items-center gap-1'}><FaBangladeshiTakaSign />{animal.price}</p>
                         <p className={'text-lg flex justify-between items-center gap-1'}><FaWeight />{animal.weight}</p>
                    </div>
                   <Link href={`/all-animals/${animal.id}`}>
                    <Button variant='outline' className={'w-full border-blue-500 text-blue-700'}>View</Button>
                   </Link>
                </div>
           </Card>
        </div>
    );
};

export default AnimalsCard;