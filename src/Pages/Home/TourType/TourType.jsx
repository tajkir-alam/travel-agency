import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaCheck, FaCity, FaConciergeBell, FaHiking, FaShip, FaSuitcaseRolling, FaUmbrellaBeach } from 'react-icons/fa';

const TourType = () => {
    return (
        <section className='bg-[#ecdfdf] py-16'>
            <div className='mt-16 md:mt-0'>
                <SectionTitle
                    heading='Browse By Category'
                    subHeading='Pick A Tour Type'
                />
            </div>

            <div className="container mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <div className='bg-white py-5 rounded-md flex flex-col items-center'>
                    <div className='bg-yellow-300 p-5 rounded-full text-xl mb-3'>
                        <FaCity />
                    </div>
                    <h6 className='font-medium'>City Tour</h6>
                    <p className='text-slate-500 text-sm'>10 Tours+</p>
                </div>
                <div className='bg-white py-5 rounded-md flex flex-col items-center'>
                    <div className='bg-yellow-300 p-5 rounded-full text-xl mb-3'>
                        <FaUmbrellaBeach />
                    </div>
                    <h6 className='font-medium'>Beaches</h6>
                    <p className='text-slate-500 text-sm'>10 Tours+</p>
                </div>
                <div className='bg-white py-5 rounded-md flex flex-col items-center'>
                    <div className='bg-yellow-300 p-5 rounded-full text-xl mb-3'>
                        <FaShip />
                    </div>
                    <h6 className='font-medium'>Boat Tour</h6>
                    <p className='text-slate-500 text-sm'>10 Tours+</p>
                </div>
                <div className='bg-white py-5 rounded-md flex flex-col items-center'>
                    <div className='bg-yellow-300 p-5 rounded-full text-xl mb-3'>
                        <FaSuitcaseRolling />
                    </div>
                    <h6 className='font-medium'>Adventure</h6>
                    <p className='text-slate-500 text-sm'>10 Tours+</p>
                </div>
                <div className='bg-white py-5 rounded-md flex flex-col items-center'>
                    <div className='bg-yellow-300 p-5 rounded-full text-xl mb-3'>
                        <FaConciergeBell />
                    </div>
                    <h6 className='font-medium'>Food</h6>
                    <p className='text-slate-500 text-sm'>10 Tours+</p>
                </div>
                <div className='bg-white py-5 rounded-md flex flex-col items-center'>
                    <div className='bg-yellow-300 p-5 rounded-full text-xl mb-3'>
                        <FaHiking />
                    </div>
                    <h6 className='font-medium'>Hiking</h6>
                    <p className='text-slate-500 text-sm'>10 Tours+</p>
                </div>
            </div>

            <div className='container lg:px-10 flex flex-col-reverse md:flex-row items-center gap-20 mt-16'>
                <div>
                    <img src="./images/image17.png" alt="" />
                </div>
                <div>
                    <p className='text-center md:text-left mt-10 md:mt-0 font-Handlee font-semibold text-blue-800 text-xl md:text-2xl'>Why Choose Us</p>
                    <h5 className='text-center md:text-left font-semibold text-2xl md:text-4xl'>Plan Your Trip <br /> With US</h5>
                    <p className='text-center md:text-left text-slate-500 my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis amet nihil officiis.</p>
                    <div className='w-[calc(100%-50px)] md:w-full mx-auto grid grid-cols-2 md:grid-cols-3 gap-5'>
                        <div>
                            <p className='flex items-center gap-3 font-semibold'>
                                <FaCheck />
                                Travel Plan
                            </p>
                            <p className='flex items-center gap-3 font-semibold'>
                                <FaCheck />
                                Hand-picked Tour
                            </p>
                        </div>
                        <div>
                            <p className='flex items-center gap-3 font-semibold'>
                                <FaCheck />
                                Cheap Rates
                            </p>
                            <p className='flex items-center gap-3 font-semibold'>
                                <FaCheck />
                                Private Guide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourType;