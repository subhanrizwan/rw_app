import React from 'react'
import {useParams} from 'react-router-dom';

export default function SingleBlog() {
  const { id } = useParams();
  console.log(id.title);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Blog Image */}
      <img src={id.FeaturedImg} alt="Blog Post" className="w-full h-96 object-cover rounded-lg mb-8" />
      
      {/* Blog Title */}
      <h1 className="text-5xl font-bold mb-4">{id.title}</h1>
      
      {/* Date and Time */}
      <div className="flex items-center gap-4 mb-8 text-gray-600">
        <span className="text-lg">📅 Posted on: <strong>{id.date}</strong></span>
      </div>
      
      {/* Blog Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">{id.content}</p>
      </div>      
    </div>
  )
}
