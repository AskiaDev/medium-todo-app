import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todo/todoSlice'

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default store