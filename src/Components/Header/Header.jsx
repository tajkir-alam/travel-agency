import React from 'react';
import { FaGoogle, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

const Header = () => {
    return (
        <div>
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
        </div>
    );
};

export default Header;