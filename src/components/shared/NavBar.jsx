'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import { authClient } from '../../lib/auth-client';

const Navbar = () => {
  const links = (
    <>
      <li><NavLink href="/">Home</NavLink></li>
      <li><NavLink href="/all-animals">All Animals</NavLink></li>
      <li><NavLink href="/profile">My Profile</NavLink></li>
    </>
  );

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="shadow-sm sticky top-0 z-50 bg-base-100">
      <div className="navbar w-11/12 mx-auto">

        {/* LEFT SIDE */}
        <div className="navbar-start flex items-center gap-2">

          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={120}
              height={120}
              className="rounded-full object-cover"
              priority
            />
            <span className="font-extrabold text-lg md:text-2xl">
              Qurbani Bazer
            </span>
          </Link>
        </div>

        {/* CENTER MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end flex gap-3">

          {!user ? (
            <>
              <Link href="/login" className="btn btn-outline btn-primary btn-sm md:btn-md">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary btn-sm md:btn-md">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-error btn-sm md:btn-md"
            >
              Logout
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default Navbar;