import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, deletePost } from './features/postsSlice'
import './App.css'

function App() {
  const [newPost, setNewPost] = useState('')
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.items)

  const handleAddPost = () => {
    const postText = newPost.trim()
    if (!postText) return

    dispatch(addPost({ id: Date.now(), text: postText }))
    setNewPost('')
  }

  const handleDeletePost = (id) => {
    dispatch(deletePost(id))
  }

  return (
    <main className="post-app">
      <div className="post-card">
        <h1>Post List</h1>
        <p className="total-posts">Total Posts: {posts.length}</p>

        <div className="input-row">
          <input
            type="text"
            value={newPost}
            onChange={(event) => setNewPost(event.target.value)}
            placeholder="Write a new post"
            aria-label="Write a new post"
          />
          <button type="button" onClick={handleAddPost} disabled={!newPost.trim()}>
            Add
          </button>
        </div>

        <ul className="post-list">
          {posts.length === 0 ? (
            <li className="empty-state">No posts yet.</li>
          ) : (
            posts.map((post) => (
              <li key={post.id} className="post-item">
                <span>{post.text}</span>
                <button type="button" className="delete-btn" onClick={() => handleDeletePost(post.id)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  )
}

export default App
