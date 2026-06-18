import React from 'react'
import Home from '../pages/home.jsx';
import Blog from '../pages/blog.jsx';
import Contact from '../pages/contact.jsx';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="flex justify-center gap-5 p-4 text-white bg-gray-800 center align-center">
                <h1 className="text-2xl font-bold">Navbar</h1>
                <ul className="p-0 m-0">    
                <NavLink to="/" className="mr-4">Home</NavLink>
                <NavLink to="/blog" className="mr-4">Blog</NavLink>
                <NavLink to="/contact" className="mr-4">Contact</NavLink>
                </ul>
            </div>
        </>
    )
}
export default Header;