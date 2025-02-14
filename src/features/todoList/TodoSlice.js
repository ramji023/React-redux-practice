import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        completeTodo(state, action) {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.completed = true;
            }
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})


export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;