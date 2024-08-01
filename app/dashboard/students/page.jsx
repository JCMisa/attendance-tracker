import React from 'react'
import AddNewStudent from './_components/AddNewStudent'

const Student = () => {
    return (
        <div className='p-7'>
            <h2 className='font-bold text-2xl flex justify-between items-center'>
                Students
                <AddNewStudent />
            </h2>
        </div>
    )
}

export default Student