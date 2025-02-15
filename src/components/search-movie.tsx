import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';

interface SearchMovieProps {
    setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchMovie: FC<SearchMovieProps> = ({ setSearch }) => {
    const [input, setInput] = useState("");

    /**
     * Handle the submission of the search form.
     *
     * Prevents the default form submission behavior and sets the search state
     * to the current input value.
     *
     * @param {FormEvent} e - The form event.
     */
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSearch(input)
    }

    return (
        <form className="flex justify-center flex-col items-start gap-2" onSubmit={handleSubmit}>
            <span className='font-bold'>Search for a movie</span>
            <div className='flex justify-center items-center gap-4'>
                <Input placeholder="Search for a movie" className="border border-gray-300 rounded-md !px-2 !py-1 !w-[20rem]" value={input} onChange={(e) => setInput(e.target.value)} />
                <Button className="bg-primary rounded !py-1 text-primary-foreground !px-2 cursor-pointer" type="submit">Search Movie</Button>
            </div>
        </form>
    )
}

