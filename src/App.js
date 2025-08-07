import AddPostForm from "./features/post/AddPostForm";
import PostsList from "./features/post/PostsList";
function App() {
  return (
    <main className="App">
      <h1>Welcome to my Bulletin Board App!</h1>
     <AddPostForm />
     <PostsList />
    </main>
  );
}

export default App;
