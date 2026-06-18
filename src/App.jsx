import { Route, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/mainLayout";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import SingleBlog from "./pages/SingleBlog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/single-blog/:id' element={<SingleBlog />} />
    </Route>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}