import { useState } from "react";
import PropTypes from 'prop-types';
import { Header } from "./Header";
import { Modal } from "./modal/Modal";

export function UpdateTodo({ updateTodo, updatingTodo, setUpdatingTodo }) {
    const [task, setTask] = useState(updatingTodo.text);

    const handleTodoSubmit = (e) => {
        e.preventDefault();
        updateTodo(updatingTodo.id, task);
        setUpdatingTodo({ updating: false, text: '', id: '' });

    };




    return <Modal onClose={(e) => setUpdatingTodo({ updating: false, text: '', id: '' })}>
        <div onClick={(e) => { e.stopPropagation() }} className="w-[25rem] bg-slate-950 rounded border border-slate-900 p-4">
            <form onSubmit={handleTodoSubmit}>
                <Header click={() => setUpdatingTodo({ updating: false, text: '', id: '' })} title="Update Todo" className="text-[1rem] font-semibold mb-6" />

                <div className="flex flex-col gap-y-9">
                    <input type="text" name='Search' id="search" value={task} placeholder="search" onChange={(e) => setTask(e.target.value)} className='border-slate-900 bg-transparent flex-1 -border pl-3 py-[0.3rem] pr-8' />

                    <button className='w-full text-nowrap hover:-bg-color focus:-bg-color border transition-colors duration-500 border-slate-900 px-[0.6rem] py-[0.3rem]'>
                        Update Todo
                    </button>
                </div>
            </form>
        </div>
    </Modal>
}


UpdateTodo.propTypes = {
    updateTodo: PropTypes.func.isRequired,
    updatingTodo: PropTypes.object.isRequired,
    setUpdatingTodo: PropTypes.func.isRequired
};