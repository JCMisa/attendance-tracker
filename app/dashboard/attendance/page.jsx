"use client"

import attendanceService from '@/app/_services/attendanceService'
import GradeSelect from '@/components/custom/GradeSelect'
import MonthSelection from '@/components/custom/MonthSelection'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import AttendanceList from './_components/AttendanceList'

const AttendancePage = () => {
    const [selectedMonth, setSelectedMonth] = useState()
    const [selectedGrade, setSelectedGrade] = useState()
    const [attendanceList, setAttendanceList] = useState()

    useEffect(() => {
        onSearchHandler()
    }, [selectedGrade])

    useEffect(() => {
        onSearchHandler()
    }, [selectedMonth])

    const onSearchHandler = async () => {
        console.log(selectedMonth, selectedGrade);

        try {
            const month = moment(selectedMonth).format('MMM/YYYY')
            const result = await attendanceService.getAttendanceList(selectedGrade, month)

            if (result) {
                setAttendanceList(result)
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching the data
                </p>
            )
            console.log(error);
        }
    }

    return (
        <div className='p-7'>
            <h2 className='font-bold text-4xl'>
                Attendance
            </h2>

            <div className='flex justify-between p-5 my-5 border items-center rounded-lg shadow-sm'>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-2 items-start'>
                        <label className="text-sm">Select Month</label>
                        <MonthSelection selectedMonth={(value) => setSelectedMonth(value)} />
                    </div>

                    <div className='flex flex-col gap-2 items-start'>
                        <label className="text-sm">Select Year</label>
                        <GradeSelect selectedGrade={(v) => setSelectedGrade(v)} />
                    </div>
                </div>


                <Button className="min-w-52" onClick={onSearchHandler}>Search</Button>
            </div>

            <AttendanceList attendanceList={attendanceList} selectedMonth={selectedMonth} />
        </div>
    )
}

export default AttendancePage