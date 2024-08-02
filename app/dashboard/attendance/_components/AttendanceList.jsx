"use client"

import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import moment from 'moment';

const AttendanceList = ({ attendanceList, selectedMonth }) => {
    const [rowData, setRowData] = useState()
    const [colDefs, setColDefs] = useState([
        { field: 'studentId' },
        { field: 'name' },
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


    return (
        <div>
            <div
                className="ag-theme-quartz-dark" // applying the Data Grid theme
                style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </div>
    )
}

export default AttendanceList