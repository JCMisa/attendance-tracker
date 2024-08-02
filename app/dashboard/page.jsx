"use client"

import GradeSelect from '@/components/custom/GradeSelect'
import MonthSelection from '@/components/custom/MonthSelection'
import React, { useEffect, useState } from 'react'
import attendanceService from '../_services/attendanceService'
import moment from 'moment'
import StatusList from './_components/StatusList'
import { toast } from 'sonner'
import dashboardService from '../_services/dashboardService'
import BarCharts from './_components/BarCharts'
import PieCharts from './_components/PieCharts'

const Dashboard = () => {
    const [selectedMonth, setSelectedMonth] = useState()
    const [selectedGrade, setSelectedGrade] = useState()
    const [attendanceList, setAttendanceList] = useState()
    const [totalPresentData, setTotalPresentData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getTotalPresentCountByDay()
        getStudentAttendance()
    }, [selectedGrade || selectedMonth])

    // useEffect(() => {
    //     getStudentAttendance()
    //     getTotalPresentCountByDay()
    // }, [selectedMonth])

    const getStudentAttendance = async () => {
        try {
            setLoading(true)
            const result = await attendanceService.getAttendanceList(selectedGrade, moment(selectedMonth).format('MMM/yyyy'))
            setAttendanceList(result);
            setLoading(false)
        } catch (error) {
            toast(
                <p className='text-sm font-bold text-red-500'>Internal error occured while fetching the data</p>
            )
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    const getTotalPresentCountByDay = async () => {
        try {
            setLoading(true)
            const result = await dashboardService.totalPresentCountByDay(moment(selectedMonth).format('MMM/yyyy'), selectedGrade)
            if (result) {
                setTotalPresentData(result);
                setLoading(false)
            }
        } catch (error) {
            toast(
                <p className='text-sm font-bold text-red-500'>Internal error occured while fetching the data</p>
            )
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-7">
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-4xl'>Dashboard</h2>

                {
                    (loading) ? (
                        <div className='min-h-16 min-w-64 shadow-md rounded-lg border animate-pulse'></div>
                    ) : (
                        <div className='flex items-center gap-4'>
                            <MonthSelection selectedMonth={setSelectedMonth} />
                            <GradeSelect selectedGrade={(v) => setSelectedGrade(v)} />
                        </div>
                    )
                }

            </div>

            <StatusList attendanceList={attendanceList} />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='lg:col-span-2'>
                    <BarCharts attendanceList={attendanceList} totalPresentData={totalPresentData} />
                </div>
                <div className=''>
                    <PieCharts attendanceList={attendanceList} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard