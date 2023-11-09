import React from 'react';
import { FaGoogle, FaLinkedinIn, FaPinterestP, FaRegUser, FaSearch, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navItems = (
        <>
            <li className='hover:bg-transparent'><NavLink to={'/'} className='hover:bg-transparent hover:text-yellow-500'>Home</NavLink></li>
            <li className='hover:bg-transparent'><NavLink to={'/about'} className='hover:bg-transparent hover:text-yellow-500'>About</NavLink></li>
            <li className='hover:bg-transparent'><NavLink to={'/tours'} className='hover:bg-transparent hover:text-yellow-500'>Tours</NavLink></li>
            <li className='hover:bg-transparent'><NavLink to={'/blog'} className='hover:bg-transparent hover:text-yellow-500'>Blog</NavLink></li>
            <li className='hover:bg-transparent'><NavLink to={'/pages'} className='hover:bg-transparent hover:text-yellow-500'>Pages</NavLink></li>
            <li className='hover:bg-transparent'><NavLink to={'/contact'} className='hover:bg-transparent hover:text-yellow-500'>Contact</NavLink></li>
        </>
    )

    return (
        <div>
            {/* info Header */}
            <div className='bg-[#ecdfdf] px-4 py-2 md:py-0 md:px-16 flex justify-between items-center text-sm text-slate-600'>
                <div className='hidden md:flex items-center gap-5'>
                    <a href="tel:+8801624632302">+880 162 463 2302</a>
                    <hr class="border border-slate-400 h-4 hidden md:block" />
                    <a href="mailto:tajkir.alam@gmail.com">tajkir.alam@gmail.com</a>
                </div>
                <div className='flex items-center gap-2 md:gap-5'>
                    <div className="flex items-center gap-5">
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaGoogle />
                        <FaPinterestP />
                    </div>
                    <hr className='border border-slate-400 h-4 hidden md:block' />
                    <select className="select bg-transparent focus:outline-none m-0">
                        <option>Eur</option>
                        <option>USD</option>
                        <option>BDT</option>
                    </select>
                </div>
            </div>

            {/* Navigation Header */}
            <div className="navbar bg-white px-4 md:px-16 justify-between">
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100 text-slate-800 font-medium tracking-wider duration-300">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn px-0 bg-transparent hover:bg-transparent border-0">
                        <img src="./logo.jpg" alt="logo" className='h-full' />
                    </Link>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-slate-800 font-medium tracking-wider duration-300">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-2 tracking-wide font-semibold text-sm text-slate-500">
                    <button type="button">
                        <FaSearch />
                    </button>
                    <FaRegUser />
                    <NavLink to={'login'} className='border-slate-400 px-1 hover:border-b hover:text-yellow-500 duration-300 ease-in-out'>
                        Login
                    </NavLink>
                    /
                    <NavLink to={'login'} className='border-slate-400 px-1 hover:border-b hover:text-yellow-500 duration-300 ease-in-out'>
                        Signup
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;