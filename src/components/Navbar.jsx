import React from 'react'
import {Link} from "react-router-dom";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <nav className='w-full min-h-[50px] flex justify-between item-center absolute z-10 bg-gradient-to-r from-blue-400 to-blue-500 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800'>
                <div className='flex justify-between item-center w-full'>
                    <ul className='flex flex-row text-xl py-4'>
                        <li>
                            <Link to={"/home"} className='px-3 py-4 border-solid border-2 border-transparent hover:border-slate-200'>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"} className='px-3 py-4 border-solid border-2 border-transparent hover:border-slate-200'>About</Link>
                        </li>
                        <li>
                            <Link to={"/work-experience"} className='px-3 py-4 border-solid border-2 border-transparent hover:border-slate-200'>Work Experience</Link>
                        </li>
                        <li>
                            <Link to={"/projects"} className='px-3 py-4 border-solid border-2 border-transparent hover:border-slate-200'>Projects</Link>
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
