import React from 'react';

const Banner = () => {
    return (
        <div className='relative bg-blue-900'>
            <div className='container grid md:grid-cols-2 items-center'>
                <div className='text-white'>
                    <h4 className='text-yellow-300 text-4xl font-Handlee'>
                        Explore The
                    </h4>
                    <h3 className='mt-5 mb-3 text-7xl'>
                        Travel & <br /> Adventures
                    </h3>
                    <p className='text-sm'>Find awesome hotel, tour, car and activities in London</p>
                </div>
                <div className='flex gap-5 mt-20'>
                    <div>
                        <img src="./images/image1.jpg" alt="" className='h-[325px] w-[600px]' />
                    </div>
                    <div>
                        <img src="./images/image22.jpg" alt="" className='h-[450px]' />
                    </div>
                </div>
            </div>

            {/* Search Destination */}
            <form className='bg-white rounded-2xl grid md:grid-cols-2 lg:grid-cols-9'>
                <div className='col-span-2'>

                </div>
                <div className='col-span-2'>

                </div>
                <div className='col-span-2'>

                </div>
                <div className='col-span-2'>

                </div>
                <div>

                </div>
            </form>
        </div>
    );
};

export default Banner;