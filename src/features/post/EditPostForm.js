import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { postUpdated } from './postsSlice';

const EditPostForm = ({ postId, onSaveComplete }) => {
  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  );

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      if (onSaveComplete) onSaveComplete(); // callback to go back to post list, etc.
    }
  };

  if (!post) return <section><h2>Post not found!</h2></section>;

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label>Post Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} />

        <label>Content:</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} />

        <button type="button" onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  );
};

export default EditPostForm;
