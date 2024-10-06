import React from "react"

function Skills({skills}) {
    if (skills) {
        return (
            <>
                <p className='mt-4 mb-2 font-bold'>Skills:</p>
                <p className='mb-2'>{skills}</p>
            </>
        )
    }
}

function Date({startDate, endDate}) {
    if(startDate || endDate) {
        return (
            <>
                <p className='mt-4 mb-2 font-bold'>{startDate} - {endDate}</p>
            </>
        )
    }
}

const Box = ({ title, description, skills, startDate, endDate, hideBorder }) => {
    if (hideBorder) {
        return (
            <>
                <div className='border-none my-8 mx-2 py-2 px-2 w-1/4'>
                    <p className='mt-2 mb-4 text-lg font-bold'>{title}</p>
                    <Date startDate={startDate} endDate={endDate} />
                    <p className='my-2'>{description}</p>
                    <Skills skills={skills} />
                </div>
            </>
        )
    }
    return (
        <>
            <div className='border border-slate-600 my-8 mx-2 py-2 px-2 w-1/4'>
                <p className='mt-2 mb-4 text-lg font-bold'>{title}</p>
                <Date startDate={startDate} endDate={endDate} />
                <p className='my-2'>{description}</p>
                <Skills skills={skills} />
            </div>
        </>
    )
}

export default Box
