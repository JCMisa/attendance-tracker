import React from 'react'

const Card = ({ icon, title, value }) => {
    return (
        <div className='flex items-center gap-5 bg-secondary rounded-lg shadow-md p-7'>
            <div className='p-2 h-10 w-10 rounded-full bg-primary text-light'>
                {icon}
            </div>
            <div>
                <h2 className='font-bold'>{title}</h2>
                <h2 className='text-lg text-gray-400'>{value}</h2>
            </div>
        </div>
    )
}

export default Card