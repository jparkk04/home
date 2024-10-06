import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <>
            <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-100'>
                <Navbar />
                <div className='w-full h-full'>
                    <img src="./src/assets/profile.png" alt="" className='w-1/4 object-cover absolute right-0 mx-64 my-32'/>
                    <div className='absolute left-[10%] bottom-[20%]'>
                        <p className='text-xl font-bold'>Hello! I'm</p>
                        <p className='text-3xl font-bold'>Justin Park</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
