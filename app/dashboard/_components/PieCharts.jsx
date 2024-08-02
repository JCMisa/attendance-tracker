"use client"

import { getUniqueRecord } from '@/app/_services/getUniqueRecord'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

const PieCharts = ({ attendanceList }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (attendanceList) {
            const totalSt = getUniqueRecord(attendanceList)
            const today = moment().format('D')
            const presentPercentage = (attendanceList.length / (totalSt.length * Number(today)) * 100)
            setData([
                {
                    name: 'Present',
                    value: Number(presentPercentage.toFixed(1)),
                    fill: "#76ABAE"
                },
                {
                    name: 'Absent',
                    value: 100 - Number(presentPercentage.toFixed(1)),
                    fill: "#b85a6b"
                }
            ])
        }
    }, [attendanceList])

    return (
        <div className='p-5 border rounded-lg shadow-md'>
            <h2 className='font-bold text-lg pb-6'>Quick Overview</h2>
            <ResponsiveContainer width={'100%'} height={300}>
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieCharts