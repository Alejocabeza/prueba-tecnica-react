import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button } from './button'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatepickerProps {
    title: string
    id: string
    reset: boolean
    setState: Dispatch<SetStateAction<{ [key: string]: string }>>
}

export const Datepicker: FC<DatepickerProps> = ({ title, id, setState, reset }) => {
    const [date, setDate] = useState<Date | null>(null)

    useEffect(() => {
        if (date) {
            setState((prev) => ({ ...prev, [id]: format(date, "yyyy") }))
        }
    }, [date])

    useEffect(() => {
        if (reset) setDate(null)
    }, [reset])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal !px-2",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "yyyy") : <span>{title}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date as Date)}
                    showYearPicker
                    dateFormat="yyyy"
                    inline
                    readOnly
                />
            </PopoverContent>
        </Popover>
    )
}

