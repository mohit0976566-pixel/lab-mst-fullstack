import { configureStore } from '@reduxjs/toolkit'
import draftsReducer from './features/draftsSlice'
import postsReducer from './features/postsSlice'

const store = configureStore({
  reducer: {
    drafts: draftsReducer,
    posts: postsReducer,
  },
})

// persist drafts.items to localStorage
let previous = store.getState().drafts.items
store.subscribe(() => {
  const current = store.getState().drafts.items
  if (previous !== current) {
    try {
      window.localStorage.setItem('post-drafts', JSON.stringify(current))
    } catch {}
    previous = current
  }
})

export default store
