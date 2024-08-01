"use client"

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import gradeService from '@/app/_services/gradeService'
import studentService from '@/app/_services/studentService'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'


const AddNewStudent = ({ refreshData }) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const [open, setOpen] = useState(false)
    const [grades, setGrades] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllGradesList();
    }, [])

    const getAllGradesList = async () => {
        try {
            setLoading(true)
            const data = await gradeService.getAllGrades()
            if (data) {
                setGrades(data);
                setLoading(false)
            }
        } catch (error) {
            console.log("get all grades error: ", error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    const onSubmit = async (data) => {
        console.log("form data: ", data)
        try {
            setLoading(true)
            const result = await studentService.addStudent(data);
            if (result) {
                toast(
                    <p className='text-sm font-bold text-green-500'>
                        Student added successfully
                    </p>
                )
                refreshData()
                setLoading(false)
                setOpen(false)
                reset()
            }
        } catch (error) {
            toast(
                <p className='text-sm font-bold text-red-500'>
                    Internal error occured while saving the student
                </p>
            )
            console.log("adding student error: ", error);
            setLoading(false)
        } finally {
            setLoading(false)
            reset()
        }
    }

    return (
        <div>
            <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
            <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Student</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='py-2'>
                                    <label htmlFor="">Full Name</label>
                                    <Input placeholder="e.g. John Doe" {...register('name', { required: true })} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label htmlFor="">Select Grade</label>
                                    <select className='p-3 border rounded-lg bg-gray-700 text-light' {...register('grade', { required: true })}>
                                        {
                                            grades && grades.map((item, index) => (
                                                <option value={item.grade} key={item.id || index}>{item.grade}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="">Contact No.</label>
                                    <Input type="number" placeholder="e.g. 09123456789" {...register('contact')} />
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="">Address</label>
                                    <Input placeholder="e.g. San Pablo City, Laguna" {...register('address')} />
                                </div>

                                <div className='flex gap-2 items-center justify-end mt-5'>
                                    <Button type="button" onClick={() => setOpen(false)} variant="outline" className="text-light border-primary min-w-32">Cancel</Button>
                                    <Button type="submit" className="min-w-32" disabled={loading}>
                                        {
                                            loading ? <><LoaderCircle className='animate-spin' /> Saving...</> : "Save"
                                        }
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddNewStudent