import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '1', title: 'First Post!', content: 'Hello!' },
]


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer