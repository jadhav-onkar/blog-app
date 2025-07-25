import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"
import { FullBlog } from "./pages/FullBlog"
import { CreateBlogs } from "./pages/CreateBlog"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<FullBlog />} />
        <Route path="/blogs/create" element={<CreateBlogs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
