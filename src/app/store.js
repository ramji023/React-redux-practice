import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postsReducer from "../features/posts/postSlice"
import userReducer from "../features/users/userSlice"
import todoReducer from "../features/todoList/TodoSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: userReducer,
        todos: todoReducer,
    }
})