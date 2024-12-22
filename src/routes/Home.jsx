import { useEffect, useState } from "react";

import { CreateTodo } from "../components/leftContent/CreateTodo"
import { ViewTodos } from "../components/rightContent/ViewTodos";
import { v4 as uuidv4 } from "uuid";
import { useErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router";


export function Home() {
    const [todo, setTodo] = useState([])
    const [updatingTodo, setUpdatingTodo] = useState({
        updating: false,
        text: '',
        id: '',
    })
    const { showBoundary } = useErrorBoundary();



    useEffect(() => {
        const fetchFromLocalStorage = (key) => {
            const data = localStorage.getItem('TODOS');
            setTodo(data ? JSON.parse(data) : []);

        }


        fetchFromLocalStorage('TODOS')
    }, [])


    useEffect(() => {
        if (todo.length > 0) {
            localStorage.setItem("TODOS", JSON.stringify(todo));
        }
    }, [todo]);

    const addTodo = text => {
        if (!text) return
        setTodo([
            {
                id: uuidv4(),
                task: text.trim(),
                completed: false,
                isEditing: false,
            },
            ...todo
        ]
        );
    }

    const toggleCompleted = id => {
        setTodo(todo.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }


    const updateTodo = (id, text) => {
        setTodo(todo.map(todo => todo.id === id ? { ...todo, task: text, isEditing: false } : todo))

    }

    const deleteTask = id => {
        setTodo(todo.filter(todo => todo.id !== id))

    }

    return (
        <section className='flex justify-center items-center w-h-inherit'>

            <section className='flex flex-col h-fit gap-[2rem] items-center justify-center max-w-[60rem] w-full self-center mx-auto p-[1.2rem] rounded bg-slate-950'>
                <CreateTodo addTodo={addTodo} />
                <ViewTodos
                    updateTodo={updateTodo}
                    toggleCompleted={toggleCompleted}
                    todo={todo}
                    deleteTask={deleteTask}
                    setUpdatingTodo={setUpdatingTodo}
                    updatingTodo={updatingTodo}
                />


                <div className="w-full">
                    <button
                        onClick={() => showBoundary('Testing the Error Boundary')}
                        className="w-full p-2 bg-slate-900"
                    >
                        Test Error Boundary
                    </button>
                </div>

                <Outlet />
            </section>
        </section>
    )
}