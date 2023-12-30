import { getTodos, updateTodosOrder } from "../../../features/todo/todoSlice"
import { useSelector, useDispatch } from "react-redux"
import TodoItem from "../TodoItem/TodoItem"
import { clearCompleted } from "../../../features/todo/todoSlice"
import FilterBy from "../../Filter/FilterBy"
import { useRef, useState } from "react"

const TodoList = () => {
    const todos = useSelector(getTodos)
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('all')
    const isDarkMode = useSelector((state) => state.todos.isDarkMode)

    function handleClearCompleted() {
        const completedItems = todos.filter((todo) => todo.done === true)
        if (completedItems.length === 0) {
            alert("No completed items to clear")
            return
        }

        dispatch(clearCompleted())
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') {
            return todo
        } else if (filter === 'active') {
            return todo.done === false
        } else if (filter === 'completed') {
            return todo.done === true
        } else {
            return todo
        }

    })

    const draggedItem = useRef(0)
    const draggedOverItem = useRef(0);

    function handleSort() {
        const todosCopy = [...todos];
        const temp = todosCopy[draggedItem.current];
        todosCopy[draggedItem.current] = todosCopy[draggedOverItem.current];
        todosCopy[draggedOverItem.current] = temp;
        dispatch(updateTodosOrder(todosCopy))
    }


    return (
        <>
            <div className={`w-full h-full shadow-lg mt-4 rounded  relative ${isDarkMode ? 'bg-dark-veryDarkDesaturatedBlue' : " bg-light-veryLightGray"} `}>
                <ul className="" >
                    {filteredTodos.map((todo, idx) => {
                        return (
                            <TodoItem idx={idx} draggedItem={draggedItem} draggedOverItem={draggedOverItem} handleSort={handleSort} key={idx} todo={todo} />
                        )
                    })}
                </ul>
                <div className="flex p-4 justify-between items-center">
                    <p className={` font-josefinSans ${isDarkMode ? ' text-light-veryLightGray' : "text-dark-veryDarkGrayishBlue"}  `}>{todos.length} items left</p>
                    <button onClick={handleClearCompleted} className="font-josefinSans hover:text-dark-veryDarkGrayishBlueHover text-dark-veryDarkGrayishBlue">Clear Completed</button>
                </div>
            </div>
            <FilterBy setFilter={setFilter} />
        </>
    )
}

export default TodoList
