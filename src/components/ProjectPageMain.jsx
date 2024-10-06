import React from 'react'
import Box from './Box.jsx'
import HomeButton from './HomeButton.jsx'

const ProjectPageMain = () => {
    return (
        <>
            <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-100'>
                <p className='pt-20 pb-4 flex justify-center text-2xl font-bold'>Featured Project: Recreation of CS61A Ants VS Some Bees</p>
                <div className='flex justify-center'>
                    <img src="./assets/ants.png" alt="" className='w-3/5'/>
                </div>
                
                <div className='mx-80 my-8'>
                    <HomeButton text='Learn More!' link='./ants.html' />
                </div>

                <p className='text-3xl font-bold mt-32 flex justify-center'>More Projects</p>
                <div className='flex flex-row justify-center'>
                    <Box title={'Parallelized Convolutions Algorithm'} 
                    description={'Utilized various techniques and frameworks for parallelization to speed up the calculation of convolutions by a factor of 40. Applications of convolutions include computer vision and machine learning.'} 
                    skills={'C, Data Level Parallelization (SIMD), Thread Level Parallelization (OpenMP), Process Level Parallelization (OpenMPI)'}/>
                    <Box title={'Logism Pipelined CPU'} 
                    description={'Created a CPU design on logism complete with ALU, RegFile, and Immediate Generator. Supports loading and storing, branching, and Risc-V instructions. Utilized pipelining to implement instruction level parallelism resulting in increased throughput.'} 
                    skills={'Logism, Combinatorial Logic, Instruction Level Parallelism'}/>
                    <Box title={'Kura Deep Neural Network AI WhatsApp Chatbot'} 
                    description={'Created a Deep Neural Network based chatbot using Tensorflow that automatically responds to WhatsApp customer queries for Kura, used NLTK for preprocessing data and Bag of Words model for NLP, and deployed using Heroku and Twilio.'} 
                    skills={'Python, Tensorflow, NLTK, Heroku, Twilio'}/>
                </div>
                <div className='flex flex-row justify-center pb-32'>
                    <Box title={'World Explorer Game'} 
                    description={'Created a game that generates randomly generated 2D world that the player can explore. Contains an enemy that utilizes Dijkstra\'s algorithm to chase the enemy in the shortest path.'} 
                    skills={'Java, Software Designing, Saving/Loading, Algorithms, Software Testing'}/>
                    <Box title={'Personal Website'} 
                    description={'Be sure to check this project out! Wait, you\'re already checking it out!'} 
                    skills={'HTML, Tailwind CSS, JavaScript, React'}/>
                    <Box hideBorder={true}/>
                </div>
            </div>
        </>
    )
}

export default ProjectPageMain
