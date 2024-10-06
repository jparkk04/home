import React from 'react'
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <nav className='w-full min-h-[50px] flex justify-between item-center absolute z-10 bg-gradient-to-r from-blue-400 to-blue-500 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800'>
                <div className='flex justify-between item-center w-full'>
                    <ul className='flex flex-row text-xl py-4'>
                        <li>
                            <a href="./" className='px-3 py-4 border-solid border-2 border-transparent hover:border-slate-200'>Home</a>
                        </li>
                        <li>
                            <a href="./about.html" className='px-3 py-4 border-solid border-2 border-transparent hover:border-slate-200'>About</a>
                        </li>
                        <li>
                            <a href="./work-experience.html" className='px-3 py-4 border-solid border-2 border-transparent hover:border-slate-200'>Work Experience</a>
                        </li>
                        <li>
                            <a href="./projects.html" className='px-3 py-4 border-solid border-2 border-transparent hover:border-slate-200'>Projects</a>
                        </li>
                    </ul>
                    <button className='flex justify-between ml-auto px-6 py-4 hidden'>
                        <MdLightMode size={'1.5em'}/>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
