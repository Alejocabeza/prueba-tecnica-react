import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Datepicker } from './ui/datepicker'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { filters } from '@/lib/filters'
import { Button } from './ui/button'

interface FilterMoviesInterface {
    setFilters: Dispatch<SetStateAction<{ [key: string]: string }>>
}

export const FiltersMovies: FC<FilterMoviesInterface> = ({ setFilters }) => {
    const [reset, setReset] = useState<boolean>(false)
    const [selectValues, setSelectValues] = useState<{ [key: string]: string }>({})

    useEffect(() => {
        if (reset) {
            setSelectValues({});
            setReset(false);
        }
    }, [reset]);

    return (
        <div className='flex flex-row justify-center items-end gap-4'>
            {
                filters.map((filter) => {
                    if (filter.type === 'datepicker') {
                        return (<div className='flex flex-col gap-2' key={filter.id}>
                            <span className='font-bold'>{filter.title}:</span>
                            <Datepicker title={filter.title} setState={setFilters} id={filter.id} reset={reset} />
                        </div>)
                    }
                    if (filter.type === 'select') {
                        return (<div className='flex flex-col gap-2' key={filter.id}>
                            <span className='font-bold'>{filter.title}:</span>
                            <Select value={selectValues[filter.id] || ''} onValueChange={(e) => {
                                setSelectValues((prev) => ({ ...prev, [filter.id]: e }))
                                setFilters((prev) => {
                                    if (e === 'Todos') return { ...prev, [filter.id]: '' }
                                    return { ...prev, [filter.id]: e }
                                })
                            }}>
                                <SelectTrigger className='w-[300px] !px-2'>
                                    <SelectValue placeholder={filter.defaultValue} />
                                </SelectTrigger>
                                <SelectContent onChange={(e) => console.log(e)}>
                                    {filter.options && filter.options.map((option) => (
                                        <SelectItem className='!p-2' key={option} value={option}>{option}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>)
                    }
                })
            }
            <Button className="bg-primary rounded !py-1 text-primary-foreground !px-2 cursor-pointer" onClick={() => {
                setFilters({})
                setReset(true)
            }}>Clearing Filters</Button>
        </div >
    )
}
