"use client"

import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '../ui/button'
import { CalendarDays } from 'lucide-react'
import moment from 'moment/moment'
import { Calendar } from "@/components/ui/calendar"

const MonthSelection = ({ selectedMonth, onMonthChange }) => {
    const currentMonth = selectedMonth || new Date()

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild className='min-w-40'>
                    <Button variant="outline" className="flex gap-2 items-center text-slate-500 border-primary">
                        <CalendarDays className='h-5 w-5' />
                        {moment(currentMonth).format('MMM yyyy')}
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Calendar
                        mode="single"
                        month={currentMonth}
                        onMonthChange={onMonthChange}
                        className="flex flex-1 justify-center"
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default MonthSelection