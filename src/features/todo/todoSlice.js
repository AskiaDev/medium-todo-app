import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
    isDarkMode: localStorage.getItem("isDarkMode") != undefined
        ? JSON.parse(localStorage.getItem("isDarkMode"))
        : false,//light mode is the default
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id)
        },
        toggleComplete: (state, action) => {
            const todo = state.todoList.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.done = !todo.done;
            }
        },

        clearCompleted: (state) => {
            const filtered = state.todoList.filter((todo) => todo.done === false)
            state.todoList = filtered
        },
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
            localStorage.setItem("isDarkMode", state.isDarkMode)
        },
        updateTodosOrder: (state, action) => {
            state.todoList = action.payload
        }
    }
})


// export actions
export const { addTodo, deleteTodo, toggleComplete, clearCompleted, toggleTheme, updateTodosOrder } = todoSlice.actions

// export reducer
export default todoSlice.reducer


export const getTodos = state => state.todos.todoList

export const getTodoItem = (state, id) => state.todos.todoList.find((todo) => todo.id === id)
