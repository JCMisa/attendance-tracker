"use client"

import React, { useEffect, useState } from 'react'
import AddNewStudent from './_components/AddNewStudent'
import studentService from '@/app/_services/studentService'
import { toast } from 'sonner'
import StudentListTable from './_components/StudentListTable'

const Student = () => {
    const [loading, setloading] = useState(false)
    const [studentsList, setStudentsList] = useState()

    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = async () => {
        try {
            setloading(true)
            const result = await studentService.getAllStudents();
            if (result) {
                setStudentsList(result);
                setloading(false)
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching data
                </p>
            )
            console.log("get all students error: ", error);
            setloading(false)
        } finally {
            setloading(false)
        }
    }
    return (
        <div className='p-7'>
            <h2 className='font-bold text-4xl flex justify-between items-center'>
                Students
                <AddNewStudent refreshData={() => getAllStudents()} />
            </h2>

            <div className='p-5 shadow-md rounded-lg max-w-52 flex items-center justify-center my-5 min-h-20 bg-secondary'>
                Total Students: {studentsList && studentsList?.length}
            </div>

            <StudentListTable studentsList={studentsList} refreshData={() => getAllStudents()} />
        </div>
    )
}

export default Student