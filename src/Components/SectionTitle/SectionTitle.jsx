import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-1/3 mx-auto text-center'>
            <h3 className='text-3xl text-blue-900 font-Handlee'>{heading}</h3>
            <h2 className='text-5xl text-slate-600 font-bold'>{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;