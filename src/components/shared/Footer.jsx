import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] pt-30 pb-10">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col justify-center md:flex-row gap-16 md:justify-evenly text-white">
          <div className="">
            <Image
              src={"/images/logo.png"}
              alt="footer logo"
              width={300}
              height={300}
              className="object-cover rounded-full ml-6 "
            />
            <h2 className="font-bold mt-2">Qurbani Bazer</h2>
          </div>
          <div className="space-y-2">
            <p className="font-bold">About</p>
            <p>
              We provide 100% Halal <br></br> Qurbani Animals. Browse animals,
              compare prices, and<br></br>book securely from verified sellers.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-2xl">Contact Info</h2>
            <div className="space-y-2">
              <p>Location:Dhaka,Bangladesh</p>
              <p>Phone:018xxxxxxxxx</p>
              <p>Email:mycompany@gmail.com </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-white">Social Links</h2>

            <ul className="flex gap-3">
              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-pink-500 hover:scale-110 transition">
                <Link href="#">
                  <AiFillInstagram className="w-5 h-5" />
                </Link>
              </li>

              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:scale-110 transition">
                <Link href="#">
                  <FaFacebookSquare className="w-5 h-5" />
                </Link>
              </li>

              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
                <Link href="#">
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white mt-20">
          <hr />
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-7.5">
          <div className="text-white ">
            © 2026 QurbaniBazer. All rights reserved.
          </div>
          <div className="text-white flex justify-between gap-1 md:gap-4">
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
