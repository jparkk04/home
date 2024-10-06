import React from "react";

const HomeButton = ({link, text}) => {
    return (
        <>
            <a className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' href={link}>{text}</a>
        </>
    )
}

export default HomeButton