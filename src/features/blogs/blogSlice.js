import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1");
        if (response) {
            console.log("response data is : ", response.data)
            return response.data;
        }
    }
)

const initialState = {
    posts: [],
    loading: 'idle',
    error: null,
}

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = 'fullfilled'
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = 'rejected'
                state.error = action.error.message;
            })
    }
})


export default blogSlice.reducer;