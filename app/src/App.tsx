import PostsPage from "./views/PostsPage";
import PostPage from "./views/PostPage";
import CreatePostPage from "./views/CreatePostPage";
import { Routes, Route } from "react-router-dom";
import UpdatePostPage from "./views/UpdatePostPage";
import ProfilePage from "./views/ProfilePage";
import AlbumPage from "./views/AlbumPage";
import TodoPage from "./views/TodoPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/post" element={<PostsPage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/post/create" element={<CreatePostPage />} />
                <Route path="/post/update/:id" element={<UpdatePostPage />} />
                <Route path="/users" element={<ProfilePage />} />
                <Route path="/album" element={<AlbumPage />} />
                <Route path="/users" element={<ProfilePage />} />
                <Route path="/todo" element={<TodoPage />} />
            </Routes>
        </div>
    );
}

export default App;
