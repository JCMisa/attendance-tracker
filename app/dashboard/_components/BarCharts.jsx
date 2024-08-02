"use client"

import { getUniqueRecord } from '@/app/_services/getUniqueRecord'
import React, { useEffect, useState } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts'

const BarCharts = ({ attendanceList, totalPresentData }) => {
    const [data, setData] = useState()

    useEffect(() => {
        formatAttendanceListCount()
    }, [attendanceList])

    useEffect(() => {
        formatAttendanceListCount()
    }, [totalPresentData])

    const formatAttendanceListCount = () => {
        const totaStudent = getUniqueRecord(attendanceList)
        const result = totalPresentData?.map((item => ({
            day: item.day,
            presentCount: item.presentCount,
            absentCount: Number(totaStudent?.length) - Number(item.presentCount)
        })))
        console.log("formatAttendanceListCount: ", result);

        setData(result)
    }

    return (

        <div className='p-5 border rounded-lg shadow-md'>
            <h2 className='font-bold text-lg pb-6'>Attendance Statistics</h2 >
            <ResponsiveContainer width={'100%'} height={300}>
                <BarChart data={data}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="presentCount" name={'Present'} fill="#76ABAE" />
                    <Bar dataKey="absentCount" name={'Absent'} fill="#b85a6b" />
                </BarChart>
            </ResponsiveContainer>
        </div >
    )
}

export default BarCharts