import React from 'react'
import Box from './Box'

const WorkExperiencePageMain = () => {
    return (
        <>
            <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-100'>
                <p className='pt-20 pb-4 flex justify-center text-2xl font-bold'>Work Experiences</p>
                <div className='flex flex-row justify-center'>
                    <Box title={'CS61A UCS1 Course Staff'} 
                    startDate={'Aug 2024'} 
                    endDate={'Present'} 
                    description={'Running and making changes to CS61A.org and working on developing a new sections.cs61a.org web app. Running Exam Prep Session that goes over Python, Functional Programming (Scheme), and SQL exam questions, run office hours, and grade exams.'}/>
                    <Box 
                    title={'Google DeepMind LLM Dataset Engineer'} 
                    startDate={'Mar 2024'} 
                    endDate={'Present'} 
                    description={'Creating 200 advanced mathematical questions for a dataset used for evaluating and improving LLMs in solving and creating solutions for difficult mathematical problems.'}/>
                    <Box title={'Kura Co-Founder and Technical Officier'} 
                    startDate={'Oct 2021'} 
                    endDate={'Sep 2023'} 
                    description={'Founded Kura, a digital insurance agency with social causes, promoting health insurance for family and friends living in the Caribbean. Created a prototype WhatsApp AI Chatbot to streamline customer communications and designed company website.'}/>
                </div>
                <div className='flex flex-row justify-center pb-32'>
                    <Box title={'United World College Math Tournament (UWCMT) Founder and President'} 
                    startDate={'Oct 2020'} 
                    endDate={'Jun 2023'} 
                    description={'Founded and led the first-ever student-led math tournament at UWC with a total of more than 700 participants from 14 schools in 8 countries with a focus on illustrating the applications of mathematics in solving global/social problems to a diverse community.'}/>
                    <Box title={'The Primate Portal Full Stack Developer Internship'} 
                    startDate={'Sep 2021'} 
                    endDate={'Feb 2022'} 
                    description={'Assisted CMU and RIT researchers in studying animal cognition by utilizing chart.js to make a dashboard that displays the results of the experiment and allows users to input their own files.'}/>
                    <Box title={'Tembusu Healthcare Intern'} 
                    startDate={'Jun 2021'} 
                    endDate={'Jul 2021'} 
                    description={'Worked closely with the CEO. Handled data relating to profits, revenue, and other business metrics for business valuation. Improved the website\'s SEO through various SEO optimization techniques.'}/>
                </div>
            </div>
        </>
    )
}

export default WorkExperiencePageMain
