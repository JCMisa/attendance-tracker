"use client"

import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import moment from 'moment';
import attendanceService from '@/app/_services/attendanceService';
import { toast } from 'sonner';


const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [25, 50, 100];

const AttendanceList = ({ attendanceList, selectedMonth }) => {
    const [rowData, setRowData] = useState()
    const [colDefs, setColDefs] = useState([
        { field: 'studentId', filter: true },
        { field: 'name', filter: true },
    ])

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
    const numberOfDays = daysInMonth(moment(selectedMonth).format('yyyy'), moment(selectedMonth).format('MM'))
    const daysAarray = Array.from({ length: numberOfDays }, (_, i) => i + 1)

    useEffect(() => {
        if (attendanceList) {
            const userList = getUniqueRecord();
            setRowData(userList);

            daysAarray.forEach((date) => {
                setColDefs(prevData => [...prevData, {
                    field: date.toString(), width: 50, editable: true
                }])

                userList.forEach((obj) => {
                    obj[date] = isPresent(obj.studentId, date)
                })
            })
        }
    }, [attendanceList])

    const isPresent = (studentId, day) => {
        const result = attendanceList.find(item => item.day == day && item.studentId == studentId)
        return result ? true : false
    }

    // get the distinct user
    const getUniqueRecord = () => {
        const uniqueRecord = [];
        const existingUser = new Set();

        attendanceList && attendanceList?.forEach(record => {
            if (!existingUser.has(record.studentId)) {
                existingUser.add(record.studentId)
                uniqueRecord.push(record)
            }
        });

        return uniqueRecord
    }

    const onMarkAttendance = async (day, studentId, presentStatus) => {
        const date = moment(selectedMonth).format('MMM/yyyy')
        if (presentStatus) {
            const data = {
                day: day,
                studentId: studentId,
                present: presentStatus,
                date: date
            }

            try {
                const result = attendanceService.markAttendance(data)
                if (result) {
                    toast(
                        <p className='text-sm font-bold text-green-500'>
                            Student ID {studentId} marked as present
                        </p>
                    )
                }
            } catch (error) {
                toast(
                    <p className='text-sm font-bold text-red-500'>
                        Internal error occured while udpdating the record
                    </p>
                )
            }
        } else {
            try {
                const result = attendanceService.markAbsent(studentId, day, date)
                if (result) {
                    toast(
                        <p className='text-sm font-bold text-red-500'>
                            Student ID {studentId} marked as absent
                        </p>
                    )
                }
            } catch (error) {
                toast(
                    <p className='text-sm font-bold text-red-500'>
                        Internal error occured while udpdating the record
                    </p>
                )
            }
        }
    }


    return (
        <div>
            <div
                className="ag-theme-quartz-dark" // applying the Data Grid theme
                style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    onCellValueChanged={(e) => onMarkAttendance(e.colDef.field, e.data.studentId, e.newValue)}
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                />
            </div>
        </div>
    )
}

export default AttendanceList