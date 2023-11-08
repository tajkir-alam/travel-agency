import React from 'react';
import { FaGoogle, FaLinkedinIn, FaPinterestP, FaRegUser, FaSearch, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navItems = (
        <>
            <li className='bg-transparent'><NavLink to={'/'} className='bg-transparent'>Home</NavLink></li>
            <li className='bg-transparent'><NavLink to={'/about'} className='bg-transparent'>About</NavLink></li>
            <li className='bg-transparent'><NavLink to={'/tours'} className='bg-transparent'>Tours</NavLink></li>
            <li className='bg-transparent'><NavLink to={'/blog'} className='bg-transparent'>Blog</NavLink></li>
            <li className='bg-transparent'><NavLink to={'/pages'} className='bg-transparent'>Pages</NavLink></li>
            <li className='bg-transparent'><NavLink to={'/contact'} className='bg-transparent'>Contact</NavLink></li>
        </>
    )

    return (
        <div>
            {/* info Header */}
            <div className='bg-[#ecdfdf] px-4 py-2 md:py-0 md:px-16 flex justify-between items-center text-sm text-slate-600'>
                <div className='md:flex items-center gap-5'>
                    <p>+880 162 463 2302</p>
                    <hr className='border border-slate-400 h-4 hidden md:block' />
                    <p>tajkir.alam@gmail.com</p>
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
            <div className="navbar bg-white px-4 md:px-16 flex">
                <div className="md:mr-5">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                        <img src="./logo.jpg" alt="logo" className='h-full' />
                    </Link>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-2 tracking-wide font-semibold text-sm text-slate-500">
                    <button type="button">
                        <FaSearch />
                    </button>
                    <FaRegUser />
                    <Link to={'login'} className='border-slate-400 px-1 hover:border-b duration-300 ease-in-out'>
                        Login
                    </Link>
                    /
                    <Link to={'login'} className='border-slate-400 px-1 hover:border-b duration-300 ease-in-out'>
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;