import { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'Getting Started with React',
      date: 'May 15, 2023',
      excerpt: 'Learn the fundamentals of React and build your first application.'
    },
    {
      id: 2,
      title: 'Advanced CSS Techniques',
      date: 'June 2, 2023',
      excerpt: 'Explore modern CSS features to create stunning designs.'
    },
    {
      id: 3,
      title: 'Building Scalable APIs',
      date: 'June 20, 2023',
      excerpt: 'Best practices for designing robust backend services.'
    }
  ]);

  return (
    <div className="blog">
      <h1>My Blog</h1>
      <div className="posts">
        {posts.map(post => (
          <article key={post.id} className="post">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p className="excerpt">{post.excerpt}</p>
            <button className="readMore">Read More</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
