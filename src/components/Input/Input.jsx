import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../features/todo/todoSlice"
import { useSelector } from 'react-redux'


const Input = () => {
    const [todoDescription, setTodoDescription] = useState('')
    const dispatch = useDispatch()

    const isDarkMode = useSelector((state) => state.todos.isDarkMode)


    function handleKeyDown(e) {
        if (!todoDescription) return
        if (e.key === 'Enter') {
            dispatch(addTodo({
                description: todoDescription,
                done: false,
                id: Date.now()
            }))
            setTodoDescription('')
        }
    }

    return (
        <div className={`w-full relative mt-4 ${isDarkMode ? 'bg-dark-veryDarkDesaturatedBlue' : "bg-light-veryLightGray"}  rounded p-4 items-center flex `}>
            <span className="w-3 h-3 p-2 items-center rounded-full  flex border border-dark-darkGrayishBlue"> </span>
            <input value={todoDescription} onKeyDown={handleKeyDown} onChange={(e) => setTodoDescription(e.target.value)} type="text" placeholder="Create a new todo..." className={`w-full ${isDarkMode ? 'bg-dark-veryDarkDesaturatedBlue text-white ' : "bg-light-veryLightGray text-dark-veryDarkDesaturatedBlue "} placeholder-dark-darkGrayishBlue pl-4 outline-none`} />
        </div>
    )
}

export default Input
