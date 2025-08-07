import AddPostForm from "./features/post/AddPostForm";
import EditPostForm from "./features/post/EditPostForm";
import PostsList from "./features/post/PostsList";

function App() {
  return (
    <main className="App">
      <h1>Welcome to my Bulletin Board App!</h1>
     <AddPostForm />
     <EditPostForm />
     <PostsList />
    </main>
  );
}

export default App;
