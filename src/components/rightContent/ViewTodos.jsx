import { FaUndoAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import { Header } from "../Header";
import { UpdateTodo } from "../UpdateTodo";
import { Link } from "react-router";





export function ViewTodos({ todo, toggleCompleted, updateTodo, deleteTask, setUpdatingTodo, updatingTodo }) {

    const [search, setSearch] = useState('');
    const [filteredTodos, setFilteredTodos] = useState(todo);
    const [filterTodo, setFilterTodos] = useState('All');
    const [openFilter, setOpenFilter] = useState(false);


    useEffect(() => {
        setFilteredTodos(todo?.filter(({ task }) => task?.toLowerCase().includes(search.toLowerCase())))
    }, [search, todo]);

    useEffect(() => {
        setFilteredTodos(todo?.filter(({ completed }) => {
            if (filterTodo === 'Completed') return completed
            else if (filterTodo === 'unCompleted') return !completed
            else return todo

        }))

    }, [filterTodo]);



    const setFilterTodosValue = (e) => {
        setFilterTodos(e.target.textContent)

    }

    const handleUpdateTodo = (text, id) => {
        console.log(text, id);

        setUpdatingTodo({ ...updatingTodo, updating: true, text: text, id: id })
    }



    return (
        <>
            {updatingTodo.updating && <UpdateTodo
                updateTodo={updateTodo}
                setUpdatingTodo={setUpdatingTodo}
                updatingTodo={updatingTodo}
            />}


            <section className='flex justify-center items-center h-full w-full'>
                <div className='max-h-[30rem] w-full h-fit flex flex-col gap-y-5 -border'>

                    <div className='flex items-center gap-x-2 mt-4 '>
                        <div className='flex justify-center items-center w-full relative'>
                            <input type="text" name='Search' id="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} className='border-slate-900 bg-transparent flex-1 max-w-[20rem] ml-auto -border pl-3 py-[0.3rem] pr-8' />

                            <div className="absolute right-0 w-[2rem] -bg-color h-full flex justify-center items-center">
                                <FiSearch className=' cursor-pointer ' />
                            </div>
                        </div>

                        <div className='border border-slate-900 relative bg-transparent w-[12rem] flex items-center justify-start gap-x-1 font-semibold'>
                            <input
                                onFocus={() => setOpenFilter(true)}
                                onBlur={() => {
                                    setTimeout(() => {
                                        setOpenFilter(false)
                                    }, 300);
                                }}
                                type="text"
                                value={filterTodo}
                                placeholder="Filter"
                                readOnly
                                name="Filter"
                                className="py-[0.3rem] z-10 cursor-default px-3  bg-transparent"
                            />
                            <div className="absolute right-0 w-[2rem] -bg-color h-full flex justify-center items-center">
                                <FaFilter className=' cursor-pointer ' />
                            </div>

                            <div className={`bg-slate-950 border border-slate-900 shadow-xl flex-col h-fit font-normal w-full absolute top-[2.4rem] right-[0rem] ${!openFilter ? 'hidden' : 'flex'}`}>
                                <p
                                    onClick={setFilterTodosValue}
                                    className={`${filterTodo === 'Completed' && 'bg-slate-900'} hover:bg-slate-900 cursor-pointer px-2 py-1`}>Completed</p>

                                <p
                                    onClick={setFilterTodosValue}
                                    className={`${filterTodo === 'unCompleted' && 'bg-slate-900'} hover:bg-slate-900 cursor-pointer px-2 py-1`}>unCompleted</p>
                                <p
                                    onClick={setFilterTodosValue}
                                    className={`${filterTodo === 'All' && 'bg-slate-900'} hover:bg-slate-900 cursor-pointer px-2 py-1`}>All</p>

                            </div>
                        </div>
                    </div>

                    <ul className='flex flex-col gap-[0.8rem] max-h-full overflow-hidden mt-2'>
                        {/* You Have Not Created Any Todo */}
                        {/* {[1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5].map(() => {
                        return <li
                            key={crypto.randomUUID()}
                            className='text-ellipsis -bg-color group w-full cursor-pointer p-[0.7rem] flex items-center gap-x-2 justify-between'
                        >
                            <span>Wash Plates.</span>

                            <div className="flex gap-x-2">
                                <button>
                                    <FaRegEdit />
                                </button>
                                <button>
                                    <MdDelete />
                                </button>
                            </div>
                        </li>
                    })} */}

                        {/* {search && filterTodo === 'All' && todo?.length === 0
                            && <li className="text-ellipsis -bg-color  w-full cursor-default p-[0.7rem] text-center mt-10 mb-5 ">
                                Todo of ({search}) Not Found
                            </li>
                        } */}

                        {search && filterTodo === 'All' && filteredTodos.length === 0
                            && <li className="text-ellipsis -bg-color  w-full cursor-default p-[0.7rem] text-center mt-10 mb-5 ">
                                Todo of ({search}) Not Found
                            </li>
                        }

                        {search && filterTodo !== 'All' && filteredTodos.length === 0
                            && <li className="text-ellipsis -bg-color  w-full cursor-default p-[0.7rem] text-center mt-10 mb-5 ">
                                Todo of ({search}) in ( {filterTodo} ) Not Found
                            </li>
                        }

                        {filterTodo !== 'All' && !search && filteredTodos.length === 0
                            && <li className="text-ellipsis -bg-color  w-full cursor-default p-[0.7rem] text-center mt-10 mb-5 ">
                                You dont have any ( {filterTodo} ) Todos
                            </li>
                        }

                        {
                            todo?.length === 0 && !search && filterTodo === 'All' && <li className="text-ellipsis -bg-color  w-full cursor-default p-[0.7rem] text-center mt-10 mb-5 ">
                                You Have Not Created Any Todo&apos;s
                            </li>
                        }

                        {filteredTodos?.map(({ task, id, completed, isEditing }, _) => {

                            return <li
                                key={id}
                                className={`text-ellipsis  group w-full p-[0.7rem] flex items-center gap-x-2 justify-between transition-all duration-700 ${completed ? 'line-through bg-slate-800' : '-bg-color'}`}
                            >
                                <Link to={`//${id}`} className="cursor-pointer w-full">{task}{!task.includes('.') && '.'}</Link>

                                <div className="flex gap-x-3 ml-4">
                                    <button onClick={() => toggleCompleted(id)}>
                                        {
                                            completed
                                                ? <FaUndoAlt className="text-[0.9rem]" />
                                                : <MdOutlineDoneOutline className="text-[0.9rem]" />
                                        }
                                    </button>
                                    <button onClick={() => handleUpdateTodo(task, id)} disabled={completed} className={`${completed && 'disabled:cursor-not-allowed'}`}>
                                        <FaRegEdit className="text-[0.9rem]" />
                                    </button>
                                    <button onClick={() => deleteTask(id)}>
                                        <MdDelete className="text-[0.9rem]" />
                                    </button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}


ViewTodos.propTypes = {
    todo: PropTypes.array.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    updatingTodo: PropTypes.object.isRequired,
    setUpdatingTodo: PropTypes.func.isRequired
}