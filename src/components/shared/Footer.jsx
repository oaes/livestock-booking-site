import Image from 'next/image';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-[#101727] pt-30 pb-10'>
         <div className='w-10/12 mx-auto'>
            <div className='flex flex-col justify-center md:flex-row gap-16 md:justify-evenly text-white'>
                <div className=''>
                    <Image src={'/images/logo.webp'} alt="footer logo" width={80} height={80} className='object-cover rounded-full ml-6 '/>
                    <h2 className='font-bold text-2xl mt-2'>QurbaniHat</h2>
                    
                </div>
                <div className='space-y-2'>
                    <p className='font-bold'>About</p>
                    <p>We provide a trusted online marketplace for buying<br></br> Qurbani Animals. Browse animals, compare prices, and<br></br> book securely from verified sellers.</p>
                </div>
                <div className='space-y-2'>
                    <h2 className='font-bold text-2xl'>Contact Info</h2>
                    <div className='space-y-2'>
                       <p>Location: Sylhet, Bangladesh</p>
                       <p>Phone: 017xxxxxxxxx</p>
                       <p>Email: fjeva944@gmail.com </p>
                    </div>
                </div>
                
                <div className='space-y-2'>
                    <h2 className='font-bold '>Social Links</h2>
                    <ul className='text-[#101727] flex gap-2'>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><Link href={'#'}><AiFillInstagram className='w-5 h-5'/></Link></li>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><Link href={'#'}><FaFacebookSquare/></Link></li>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><Link href={'#'}><FaXTwitter /></Link></li>
                    </ul>
                </div>
            </div>
            <div className='text-white mt-20'>
                <hr />
            </div>
            <div className='flex flex-col md:flex-row justify-between mt-7.5'>
                <div className='text-white '>
                    © 2026 QurbaniHat. All rights reserved.
                </div>
                <div className='text-white flex justify-between gap-1 md:gap-4'>
                    <p>Privacy Policy </p> 
                    <p>Terms of Service</p>           
                    <p>Cookies</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Footer;