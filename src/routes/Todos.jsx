import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function Todos() {
    const { id: todoId } = useParams();
    const [data, setData] = useState(null); // Initialize as null to handle loading state.

    useEffect(() => {
        const fetchFromLocalStorage = () => {
            const todos = localStorage.getItem("TODOS");
            if (todos) {
                const parsedData = JSON.parse(todos);
                const todoItem = parsedData.find(({ id }) => id === todoId);
                setData(todoItem || null); // Set null if no match is found.
            }
        };

        fetchFromLocalStorage();
    }, [todoId]);


    if (!data) {
        return <p>Not Found</p>
    }


    return (
        <div className="h-fit flex justify-center items-start w-full">
            <div className="mt-6 gap-y-1 w-full">
                <p className="font-medium text-[1rem]">
                    Todo:{" "} {""}{data.task}
                </p>
                <p className="font-medium text-[1rem]">
                    Completed: {data.completed ? "Yes" : "No"}
                </p>
            </div>
        </div>
    );
}
