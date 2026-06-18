import React from 'react'
import FeaturedImg from '../assets/featured.jpg';
import { useNavigate } from 'react-router-dom';
import articles from '../data/articles';
import { useLocation } from 'react-router-dom';
const Blog = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="p-10 blog-container">
            <h1 className="mb-10 text-5xl font-bold">Articles</h1>
            {/* boxes */}
            <div className="flex w-full gap-5">
                {articles.map((data) => (
                    <div key={data.id} className="flex-1 h-auto article">
                        <div className="p-5 border border-gray-100 rounded wrapper ">
                            <img src={data.image} alt={data.title} className="object-cover w-full mb-3 rounded h-60" />
                            <p className="time">Posted on: <span>{data.date}</span></p>
                            <h2 className="blog-title">{data.title}</h2>
                            <p className="content">{data.content}</p>
                            <button onClick={() => {
                                navigate(`/single-blog/${data.id}`, { state: { from: location } });
                            }} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog;