import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { selectAllPosts, postDeleted } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import EditPostForm from './EditPostForm';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const [editingPostId, setEditingPostId] = useState(null);

  const orderedPosts = posts.slice().sort((a, b) => b.date?.localeCompare(a.date));

  const handleDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(postDeleted(postId));
      if (editingPostId === postId) setEditingPostId(null);
    }
  };

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      {editingPostId === post.id ? (
        <EditPostForm
          postId={post.id}
          onSaveComplete={() => setEditingPostId(null)}
        />
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.content ? post.content.substring(0, 100) : 'No content'}</p>
          <p className='postCredit'>
            <PostAuthor userId={post.userId} /> |{' '}
            <TimeAgo timeStamp={post.date || "NO DATE"} />
          </p>

          <ReactionButtons post={post} />

          <div style={{ marginTop: '0.5rem' }}>
            <button type="button" onClick={() => setEditingPostId(post.id)}>Edit</button>
            <button
              type="button"
              onClick={() => handleDelete(post.id)}
              style={{ marginLeft: '0.5rem' }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts.length ? renderedPosts : <p>No posts available.</p>}
    </section>
  );
};

export default PostsList;
