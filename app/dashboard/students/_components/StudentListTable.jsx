"use client"

import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from '@/components/ui/button';
import { Search, Trash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import studentService from '@/app/_services/studentService';
import { toast } from 'sonner';


const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [25, 50, 100];



const StudentListTable = ({ studentsList, refreshData }) => {
    const CustomButtons = (props) => {
        return (
            <AlertDialog>
                <AlertDialogTrigger>
                    <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-300 hover:text-red-500">
                        <Trash />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your record
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteRecord(props?.data?.id)}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        )
    }

    const [colDefs, setColDefs] = useState([
        { field: "id", filter: true },
        { field: "name", filter: true },
        { field: "grade", filter: true },
        { field: "address", filter: true },
        { field: "contact", filter: true },
        { field: "action", cellRenderer: CustomButtons },
    ])

    const [rowData, setRowData] = useState()
    const [searchInput, setSearchInput] = useState()

    useEffect(() => {
        studentsList && setRowData(studentsList)
    }, [studentsList])

    const deleteRecord = async (id) => {
        try {
            const result = await studentService.deleteStudent(id)
            if (result) {
                toast(
                    <p className='font-bold text-sm text-green-500'>
                        Student deleted successfully
                    </p>
                )
                refreshData();
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while deleting data
                </p>
            )
        }
    }

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