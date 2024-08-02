"use client"

import attendanceService from '@/app/_services/attendanceService'
import GradeSelect from '@/components/custom/GradeSelect'
import MonthSelection from '@/components/custom/MonthSelection'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import React, { useState } from 'react'
import { toast } from 'sonner'
import AttendanceGrid from './_components/attendanceGrid'

const AttendancePage = () => {
    const [selectedMonth, setSelectedMonth] = useState()
    const [selectedGrade, setSelectedGrade] = useState()
    const [attendanceList, setAttendanceList] = useState()

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

            <div className='flex gap-4 p-5 my-5 border rounded-lg shadow-sm'>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="">Select Month</label>
                    <MonthSelection selectedMonth={(value) => setSelectedMonth(value)} />
                </div>

                <div className='flex gap-2 items-center'>
                    <label htmlFor="">Select Grade</label>
                    <GradeSelect selectedGrade={(v) => setSelectedGrade(v)} />
                </div>

                <Button onClick={onSearchHandler}>Search</Button>

                <AttendanceGrid attendanceList={attendanceList} />
            </div>
        </div>
    )
}

export default AttendancePage