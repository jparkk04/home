import React from 'react'
import Section from './Section'
import HomeButton from './HomeButton'

const HomeAbout = () => {
    return (
        <>
            <Section title={"About Me"} >
                <div className='flex flex-row'>
                    <div>
                        <p className='py-8 pr-32'> I'm a student at UC Berkeley who is passionate about solving problems that require creative solutions 
                        in CS and math that will have a positive impact on society. I have lived in 4 countries: US, Singapore,
                        Japan, and South Korea. I enjoy running, hiking, travelling, and trying all sorts of interesting food.
                        </p>
                    </div>
                    <img src="./images/about.png" alt="" className='w-1/4 object-cover' />
                </div>
            </Section>
        </>
    )
}

export default HomeAbout
