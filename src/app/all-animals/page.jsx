
import AnimalsCard from '@/components/homePage/AnimalsCard';
import { getAnimalsData } from '@/lib/fetchData';
import Link from 'next/link';

const AllAnimalsPage = async ({searchParams}) => {
    const animals = await getAnimalsData();
    const res = await searchParams
    const sort = res?.sort;
     console.log(sort);
     let sortedAnimals = [...animals];
    if(sort==='high'){
        sortedAnimals.sort((a,b)=>b.price-a.price)
    }
    if(sort==='low'){
        sortedAnimals.sort((a,b)=>a.price-b.price)
    }

    
    return (
        <div className='my-20 w-11/12 mx-auto'>
               <h1 className=' font-bold text-4xl text-center mb-4'>Featured animals</h1>
            <div className=' flex justify-end mr-30'>
                <div className="dropdown dropdown-bottom ">
                <div tabIndex={0} role="button" className="btn bg-primary text-white m-1">Sorted By ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li className='font-bold'><Link href={'/all-animals?sort=high'} className='block'>High Price</Link></li>
                    <li className='font-bold'><Link href={'/all-animals?sort=low'} className='block'>Low Price</Link></li>
                </ul>
            </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
                    {
                        sortedAnimals.map(animal => <AnimalsCard key={animal.id} animal={animal}></AnimalsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAnimalsPage;