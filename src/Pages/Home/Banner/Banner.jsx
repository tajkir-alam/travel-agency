import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import "react-datepicker/dist/react-datepicker.css";

const Banner = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const animatedComponents = makeAnimated();


    const onSubmit = data => {
        console.log(data);
    };


    const destinationOptions = [
        { value: 'Rangamati', label: 'Rangamati' },
        { value: 'Coxs Bazar', label: 'Coxs Bazar' },
        { value: 'Shitakundu', label: 'Shitakundu' },
    ]

    return (
        <div className='relative bg-blue-900'>
            <div className='container py-12 grid md:grid-cols-2 items-center'>
                <div className='text-white'>
                    <h4 className='text-yellow-300 text-4xl font-Handlee'>
                        Explore The
                    </h4>
                    <h3 className='mt-5 mb-3 text-7xl'>
                        Travel & <br /> Adventures
                    </h3>
                    <p className='text-sm'>Find awesome hotel, tour, car and activities in London</p>
                </div>
                <div className='flex gap-5 lg:mt-12'>
                    <div>
                        <img src="./images/image1.jpg" alt="" className='h-[325px] w-[600px]' />
                    </div>
                    <div>
                        <img src="./images/image22.jpg" alt="" className='h-[450px]' />
                    </div>
                </div>
            </div>

            {/* Search Destination */}
            <form onSubmit={handleSubmit(onSubmit)} className='absolute -bottom-24 md:bottom-8 left-5 lg:left-36 p-5 bg-white rounded-xl grid grid-cols-2 lg:grid-cols-5 gap-3 items-center'>
                <div>
                    <label className='font-Handlee block ml-1' htmlFor="destination">Destination</label>
                    <Select
                        placeholder={`Where to go`}
                        components={animatedComponents}
                        options={destinationOptions}
                        
                    />
                </div>
                <div>
                    <label className='font-Handlee block ml-1' htmlFor="destination">Type</label>
                    <Select
                        placeholder={`Activity`}
                        components={animatedComponents}
                        options={destinationOptions}
                    />
                </div>
                <div>
                    <label className='font-Handlee block ml-1' htmlFor="destination">When</label>
                    <ReactDatePicker
                        onChange={(date) => setStartDate(date)}
                        portalId="root-portal"
                        placeholderText={`Date`}
                        className='pl-2 py-[6px] border border-black/20 rounded-md focus:outline-none'
                    />
                </div>
                <div>
                    <label className='font-Handlee block ml-1' htmlFor="destination">Activity</label>
                    <Select
                        placeholder={`Guests`}
                        components={animatedComponents}
                        options={destinationOptions}
                    />
                </div>
                <div className='flex justify-center mt-4 col-span-2 md:col-span-1'>
                    <button type='submit' className='btn bg-yellow-300 w-full hover:bg-yellow-300/80 hover:border-transparent capitalize tracking-widest px-8 text-lg'>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Banner;