"use client"

import gradeService from '@/app/_services/gradeService'
import { LoaderCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const GradeSelect = ({ value, selectedGrade }) => {
    const [grades, setGrades] = useState([])
    const [loading, setLoading] = useState(false)

    const getAllGradesList = async () => {
        try {
            setLoading(true)
            const data = await gradeService.getAllGrades()
            if (data) {
                setGrades(data);
                setLoading(false)
            }
        } catch (error) {
            console.log("get all grades error: ", error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllGradesList();
    }, [])

    return (
        <div>
            {
                loading ? (
                    <LoaderCircle className='animate-spin' />
                ) : (
                    grades.length > 0 ? (
                        <select
                            className='p-2 border rounded-lg bg-gray-700 text-light min-w-40'
                            onChange={(e) => selectedGrade(e.target.value)}
                            value={value}
                        >
                            {
                                grades && grades.map((item, index) => (
                                    <option value={item.grade} key={item.id || index}>{item.grade}</option>
                                ))
                            }
                        </select>
                    ) : (
                        <p className='text-center text-xs'>No year level found.</p>
                    )
                )
            }
        </div>
    )
}

export default GradeSelect