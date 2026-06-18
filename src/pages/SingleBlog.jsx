import React from 'react'
import { useParams } from 'react-router-dom';
import articles from '../data/articles.jsx';

export default function SingleBlog() {

  const { id } = useParams();
  const article = articles.find(
    item => item.id === Number(id)
  );
  console.log(id);

  return (
    <div className="max-w-4xl px-4 py-10 mx-auto">
      {/* Blog Image */}
      <img src={article.image} alt="Blog Post" className="object-cover w-full mb-8 rounded-lg h-96" />

      {/* Blog Title */}
      <h1 className="mb-4 text-5xl font-b old">{article.title}</h1>

      {/* Date and Time */}
      <div className="flex items-center gap-4 mb-8 text-gray-600">
        <span className="text-lg">📅 Posted on: <strong>{article.date}</strong></span>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none">
        <p className="mb-4 leading-relaxed text-gray-700">{article.content}</p>
      </div>
    </div>
  )
}
