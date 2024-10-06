import React from "react";

const AntsPageMain = () => {
    return (
        <>
            <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-100 pb-32'>
                <p className='pt-20 pb-4 flex justify-center text-2xl font-bold'>Ants VS. Some Bees!</p>
                <div className='flex justify-center'>
                    <img src="./assets/ants.png" alt="" className='w-3/5'/>
                </div>
                <p className='text-3xl font-bold mt-32 mb-8 ml-8'>Brief Overview</p>
                <p className='ml-8 mr-8'>After noticing bugs in Berkeley's CS61A's Ants VS. Some Bees project, my 
                friend Benji and I reached out to Professor John DeNero to work on recreating the backend and the 
                frontend of the project. The project is used by over 1800 students per year in both CS 61A and Data 
                C88C courses at Berkeley to develop students' skills in Python OOP and other fundementals of Python. 
                The project not only involved writing code, but also planning features, communicating with relevant 
                parties, and talking with students to figure out and resolve bugs (while drinking boba).</p>
                <p className='text-3xl font-bold mt-32 mb-8 ml-8'>Development process</p>
                <p className='text-2xl font-bold ml-8 mb-4'>Noticing the Problem</p>
                <p className='ml-8 mr-8 mb-4'>It was Fall 2023 and Benji and I were taking our first college-level 
                CS Course at UC Berkeley, CS61A. It was a wonderful course that taught me the fundementals of 
                programming languages by exploring different paradigms of programming languages. Even though I had 
                prior coding experience, this course really improved my programming maturity. The third project in 
                the course is Ants VS Some Bees. It is a game inspired by Plants VS Zombies where the player builds 
                an army of different types of ants to defend against the bees. The different types of ants present 
                in the game made it excellent for allowing students to apply their knowledge of Object Oriented 
                Programming. The coding aspect of the game went relatively smoothly. However, when Benji and I decided 
                to run the game, we were confused if we implemented the game correctly even once we passed all of the 
                tests. We had no idea if the ants were attacking and if the bees were taking damage as there were no 
                projectiles being thrown nor any indication that the bees were getting hit.</p>
                <p className='text-2xl font-bold ml-8 mb-4'>Taking Action</p>
                <p className='ml-8 mr-8 mb-4'>After noticing that the Ants VS. Some Bees could be improved, Benji and 
                I mentioned the Ants project during Professor DeNero's office hours we often went to talk about all 
                sorts of interesting topics in CS. To our delightful suprise, Professor DeNero is very open to 
                supporting projects that will make the 61A course. He was happy for us to do this project and provide
                 us with support. We got started on the project.</p>
                <p className='text-2xl font-bold ml-8 mb-4'>Planning</p>
                <p className='ml-8 mr-8 mb-4'>We first needed to identify the features we were going to have in the new
                 GUI. We knew that indicating damage and projectiles were definitely features we should have. We also
                 realized that the game was easy to beat after surviving a few initial rounds and was confusing
                 since there were long pauses between the waves, which gave the impression that the game ended when it
                 actually did not. Additionally, we decided to make the game run via using Flask. We talked to DeNero
                 if he liked the featured we thought of and if he wanted any other features. With this plan and
                 expecting to adopt to new ideas, we decided to start coding. </p>
                <p className='text-2xl font-bold ml-8 mb-4'>Writing the Code</p>
                <p className='ml-8 mr-8 mb-4'> Before we started coding, we deicided to brush up on web development
                languages: HTML, CSS, and JS. We had to balance between learning everything about these languages well
                and making sure that we were able to finish this project on time. I decided to go through a web
                development course on Coursera before getting started. Besides the basic web development features,
                we also had to learn how to do animations using CSS and JS to animate the movement of bees as they
                moved between tiles. We faced many difficulties as we went along. One of the difficulties was
                to find an efficient way to add the feature of indicating damage on an insect. We were not great
                designers and there were tens of ants and bees that would need to be redesigned. After searching, we
                found out about the filter style. However, finding the right filter that would make all of the insects
                turn red that looked good took a lot of experimentation. </p>
                <p className='text-2xl font-bold ml-8 mb-4'>Testing and Debugging (With Boba!)</p>
                <p className='ml-8 mr-8 mb-4'>Bugs are inevitable and unfortunately, the halting problem implies that 
                we will never build an algorithm that can fix any bug. During the development process, we tried our 
                best to resolve as many bugs as we can. We brought our friends over, ordered some boba and fried 
                chicken, and tested the code on different computers and browsers to make sure that we had all of the 
                dependencies and to try to catch any bugs that are OS or browser specific. Professor DeNero put a 
                lot of effort helping us debug and spent the whole afternoon in one of the days debugging and did 
                a lot more than we can ever imagine. We realized that the professors here aren't all people who are 
                super cracked in one area of CS, but can not actually code, but there are those who in addition to 
                knowing so much about their specialization knows a lot about CS in general and are also super great 
                in software development. We still knew that there might be some bugs that may appear. Therefore, 
                Professor DeNero decided to do an early preview of the project where students who finished the 
                previous project early can volunteer to start and finish the Ants VS Some Bees earlier than the rest 
                of the students and reach out to us if they noticed any bugs. We found out that some students had
                bugs that were related to some of the packages. We invited them to meet with us so we can identify
                the problems and resolve them. We decided to bring boba to the debugging session. One of the bugs
                did not take that long to resolve, but another took us much longer. </p>
                <p className='text-2xl font-bold ml-8 mb-4'>Presentation!</p>
                <p className='ml-8 mr-8 mb-4'>At the end of the project, Professor DeNero invited us to do a 
                presentation on the process of working on the project. It was not for the whole class in at Pimentel, 
                but instead was at a smaller room in Cory after lecture, which itself was an optional lecture. Since 
                students are busy, we did not expect many people to show up, but to our suprise, around 10 to 20 
                students including some who weren't our friends decided to show up and Professor DeNero was also 
                there. We went over our journey on building the project, some web development basics, and answered 
                some questions the students there had.</p>
                <p className='text-3xl font-bold mt-16 mb-8 ml-8'>Credits</p>
                <p className='ml-8 mr-8'>There are so many people to thank for helping with this project:</p>
                <ul className='ml-8 mr-8 mb-4'>
                    <li className='mt-2'>Professor John DeNero for being open to this project idea and supporting us in planning, development, debugging, and testing</li>
                    <li className='mt-2'>The orginal creators of the Ants VS Some Bees Project for idea, design, and code</li>
                    <li className='mt-2'>and</li>
                    <li className='mt-2'>Amy Xu</li>
                    <li className='mt-2'>Ayush Mahale</li>
                    <li className='mt-2'>Caitlin Yang</li>
                    <li className='mt-2'>Celine Tan</li>
                    <li className='mt-2'>Hans Mao</li>
                    <li className='mt-2'>Jim Feng</li>
                    <li className='mt-2'>Ken Zheng</li>
                    <li className='mt-2'>Lyndon Yang</li>
                    <li className='mt-2'>Maria Rufova</li>
                    <li className='mt-2'>Noah Han</li>
                    <li className='mt-2'>Rajoshi Basu</li>
                    <li className='mt-2'>Robert Shi</li>
                    <li className='mt-2'>Susanna Atanessian</li>
                    <li className='mt-2'>Shamith Pasula</li>
                    <li className='mt-2'>Shane Guo</li>
                    <li className='mt-2'>for helping with development, testing, debugging, or giving us advice</li>
                </ul>
            </div>
        </>
    )
}

export default AntsPageMain
