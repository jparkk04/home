import React from 'react'

const AboutPageMain = () => {
    return (
        <>
            <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-100'>
                <div className='flex flex-row'>
                    <div>
                        <div className='mt-40 mx-40'>
                            <p className='mt-2 text-3xl font-bold'> Quick Introduction</p>
                            <p className='mt-8 text-lg'> I'm a student at UC Berkeley who is passionate about solving problems that require creative solutions 
                            in CS and math that will have a positive impact on society. I have lived in 4 countries: US, Singapore,
                            Japan, and South Korea. I enjoy running, hiking, travelling, and trying all sorts of interesting food.
                            </p>
                        </div>
                    </div>
                    <img src="./images/about.png" alt="" className='w-1/4 object-cover mr-32 my-32' />
                </div>
            </div>
        </>
    )
}

export default AboutPageMain
