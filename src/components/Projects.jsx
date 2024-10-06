import React from 'react'
import Section from './Section'
import Box from './Box'
import HomeButton from './HomeButton'

const Projects = () => {
    return (
        <>
            <Section title={"Projects"}>
                <div className='flex flex-row'>
                    <Box title={'Parallelized Convolutions Algorithm'} 
                    description={'Utilized various techniques and frameworks for parallelization to speed up the calculation of convolutions by a factor of 40. Applications of convolutions include computer vision and machine learning.'} 
                    skills={'C, Data Level Parallelization (SIMD), Thread Level Parallelization (OpenMP), Process Level Parallelization (OpenMPI)'}/>
                    <Box title={'Recreation of CS61A Ants'} 
                    description={'Remade the GUI and backend for over 1800 students per year in the CS61A Course Ants educational project collaborating with Professor John Denero. After noticing many GUI bugs while working on the 61A Ants Project, my friend and I reached out to Professor Denero to work on a new GUI that included animations of projectiles that the ants throw at the invading bees along with other features.'} 
                    skills={'Python, Flask, HTML, CSS, JS, JS Animation, DOM, debugging'}/>
                    <Box title={'Kura Deep Neural Network AI WhatsApp Chatbot'} 
                    description={'Created a Deep Neural Network based chatbot using Tensorflow that automatically responds to WhatsApp customer queries for Kura, used NLTK for preprocessing data and Bag of Words model for NLP, and deployed using Heroku and Twilio.'} 
                    skills={'Python, Tensorflow, NLTK, Heroku, Twilio'}/>
                </div>
                <HomeButton link='./projects.html' text='More Projects' />
            </Section>
        </>
    )
}

export default Projects
