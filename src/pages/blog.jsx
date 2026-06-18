import React from 'react'
import FeaturedImg from '../assets/featured.jpg';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

    const navigate = useNavigate();
    
    const articles = [
        { id: 1, title: 'Blog Post Title 1', date: '2023-01-01', content: 'This is the content of the blog post.' },
        { id: 2, title: 'Blog Post Title 2', date: '2023-01-02', content: 'This is the content of the blog post.' },
        { id: 3, title: 'Blog Post Title 3', date: '2023-01-03', content: 'This is the content of the blog post.' }
    ]

    return (
        <div className="blog-container p-10">
            <h1 className="text-5xl font-bold mb-10">Articles</h1>
            {/* boxes */}
            <div className="flex gap-5 w-full">
                {articles.map((article) => (
                    <div key={article.id} className="article flex-1 h-auto">
                        <div className="wrapper p-5 rounded border border-gray-100 ">
                            <img src={FeaturedImg} alt={article.title} className="w-full h-60 object-cover rounded mb-3" />
                            <p className="time">Posted on: <span>{article.date}</span></p>
                            <h2 className="blog-title">{article.title}</h2>
                            <p className="content">{article.content}</p>
                            <button onClick={()=>{
                                navigate("/SingleBlog.jsx")
                            }} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog;