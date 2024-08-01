"use client"

import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from '@/components/ui/button';
import { Search, Trash } from 'lucide-react';
import { Input } from '@/components/ui/input';

const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [25, 50, 100];

const CustomButtons = (props) => {
    return <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-300 hover:text-red-500"><Trash /></Button>
}

const StudentListTable = ({ studentsList }) => {
    const [colDefs, setColDefs] = useState([
        { field: "id", filter: true },
        { field: "name", filter: true },
        { field: "address", filter: true },
        { field: "contact", filter: true },
        { field: "action", cellRenderer: CustomButtons },
    ])

    const [rowData, setRowData] = useState()
    const [searchInput, setSearchInput] = useState()

    useEffect(() => {
        studentsList && setRowData(studentsList)
    }, [studentsList])

    return (
        <div className='my-7'>
            <div
                className="ag-theme-quartz-dark" // applying the Data Grid theme
                style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
                <div className='p-2 rounded-lg border shadow-sm flex gap-2 mb-4 max-w-sm items-center'>
                    <Search className='text-light' />
                    <Input type="text" placeholder="Enter something to search..." className="outline-none w-full text-light" onChange={(event) => setSearchInput(event.target.value)} />
                </div>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    quickFilterText={searchInput}
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                />
            </div>
        </div>
    )
}

export default StudentListTable