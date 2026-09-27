import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload)
    },
    deletePost: (state, action) => {
      state.items = state.items.filter((post) => post.id !== action.payload)
    },
  },
})

export const { addPost, deletePost } = postsSlice.actions
export default postsSlice.reducer
