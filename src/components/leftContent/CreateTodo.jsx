import { useState } from "react";
import { Header } from "../Header";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";

export function CreateTodo({ addTodo }) {
    const [text, setText] = useState('');
    let navigate = useNavigate();


    const handleTodoSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }



    return <section className='flex justify-center items-center h-full w-full'>

        <form onSubmit={handleTodoSubmit} className='w-full h-fit flex flex-col gap-y-4 items-center justify-center'>
            <Header click={() => navigate('/')} title='Create Todo' className='text-[1.2rem] cursor-pointer font-semibold text-center mr-auto' />

            <div className="flex items-center w-full">
                <input
                    className='w-full border border-slate-900 bg-transparent px-[0.4rem] py-[0.3rem]'
                    name="createTodo"
                    id="createTodo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Create a Todo'
                />
                <button className='w-fit text-nowrap -bg-color -border px-[0.6rem] py-[0.3rem]'>
                    Create Todo
                </button>
            </div>
        </form>
    </section>
}

CreateTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}