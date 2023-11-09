import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaCity, FaConciergeBell, FaHiking, FaShip, FaSuitcaseRolling, FaUmbrellaBeach } from 'react-icons/fa';

const TourType = () => {
    return (
        <section className='bg-[#ecdfdf] py-16'>
            <div className='mt-16 md:mt-0'>
                <SectionTitle
                    heading='Browse By Category'
                    subHeading='Pick A Tour Type'
                />
            </div>

            <div className="container mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-5">
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

            <div className='container px-10 flex mt-16'>
                <div>
                    <img src="./images/image17.png" alt="" />
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default TourType;