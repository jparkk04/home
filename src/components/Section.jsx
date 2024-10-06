import React from 'react'

const Section = ({ title, children }) => {
    return (
        <>
            <div className='py-36 px-24 min-h-screen max-w-screen-2xl w-full mx-auto bg-indigo-100'>
                <div className='flex flex-row'>
                    <p className='text-3xl font-bold'>{title}</p>
                    <p className='text-3xl font-bold'>.</p>
                </div>
                {children}
            </div>
        </>
    )
}

export default Section
