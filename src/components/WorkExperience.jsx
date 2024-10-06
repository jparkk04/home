import React from 'react'
import Section from './Section'
import Box from './Box'
import HomeButton from './HomeButton'

const WorkExperience = () => {
    return (
        <>
            <Section title={"Work Experience"}>
                <div className='flex flex-row'>
                    <Box title={'CS61A UCS1 Course Staff Infrastructure Team'} startDate={'Aug 2024'} endDate={'Present'} description={'Running and making changes to CS61A.org and working on developing a new sections.cs61a.org web app. Running Exam Prep Session that goes over Python, Functional Programming (Scheme), and SQL exam questions, run office hours, and grade exams.'}/>
                    <Box title={'Google DeepMind LLM Dataset Engineer'} startDate={'Mar 2024'} endDate={'Present'} description={'Creating 200 advanced mathematical questions for a dataset used for evaluating and improving LLMs in solving and creating solutions for difficult mathematical problems.'}/>
                    <Box title={'Kura Co-Founder and Technical Officier'} startDate={'Oct 2021'} endDate={'Sep 2023'} description={'Founded Kura, a digital insurance agency with social causes, promoting health insurance for family and friends living in the Caribbean. Created a prototype WhatsApp AI Chatbot to streamline customer communications and designed company website.'}/>
                </div>
                <HomeButton link='./work-experience' text='More Experiences' />
            </Section>
        </>
    )
}

export default WorkExperience
