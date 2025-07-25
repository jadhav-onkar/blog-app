import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"
import { FullBlog } from "./pages/FullBlog"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<FullBlog />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
