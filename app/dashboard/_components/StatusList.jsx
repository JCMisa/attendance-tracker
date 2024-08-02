"use client"

import { getUniqueRecord } from '@/app/_services/getUniqueRecord'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { GraduationCap, TrendingDown, TrendingUp } from 'lucide-react'

const StatusList = ({ attendanceList }) => {
    const [totalStudent, setTotalStudent] = useState(0)
    const [presentPerc, setPresentPerc] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (attendanceList) {
            setLoading(true)
            const totalSt = getUniqueRecord(attendanceList)
            setTotalStudent(totalSt.length)

            const today = moment().format('D')
            const presentPercentage = (attendanceList.length / (totalSt.length * Number(today)) * 100)
            setPresentPerc(presentPercentage);
            setLoading(false)
        }
    }, [attendanceList])

    return (
        <>
            {
                (loading, !totalStudent, !presentPerc) ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
                        <div className='min-w-60 min-h-24 shadow-md rounded-lg border animate-pulse bg-secondary'></div>
                        <div className='min-w-60 min-h-24 shadow-md rounded-lg border animate-pulse bg-secondary'></div>
                        <div className='min-w-60 min-h-24 shadow-md rounded-lg border animate-pulse bg-secondary'></div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
                        <Card icon={<GraduationCap />} title={"Total Student"} value={totalStudent} />
                        <Card icon={<TrendingUp />} title={"Present"} value={presentPerc ? presentPerc.toFixed(1) + "%" : 0 + "%"} />
                        <Card icon={<TrendingDown />} title={"Absent"} value={presentPerc ? (100 - presentPerc).toFixed(1) + "%" : 0 + "%"} />
                    </div >
                )
            }
        </>
    )
}

export default StatusList