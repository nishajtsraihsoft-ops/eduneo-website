import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    tag: "SPOKEN ENGLISH",
    date: "Thu, 29 Jan",
    title: "Best English Learning App for Kids in India | Speaking, Grammar & Confidence",
    bgClass: "bg-blue-card",
    large: true
  },
  {
    id: 2,
    tag: "SPOKEN ENGLISH",
    date: "Fri, 04 Jul, 2025",
    title: "English Learning for Beginners: Step-by-Step Guide",
    bgClass: "bg-yellow-card",
    large: false
  },
  {
    id: 3,
    tag: "SPOKEN ENGLISH",
    date: "Mon, 01 Dec, 2025",
    title: "150+ Daily Use English Sentences for",
    bgClass: "bg-pink-card",
    large: false
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog section">
      <div className="container">
        <div className="blog-header">
          <div className="title-wrapper">
            <span className="the-box">the</span>
            <h2>EDUNEO speaks</h2>
          </div>
          <p className="blog-subtitle">THE BEST & LATEST FROM THE<br/>EDUNEO BLOGOSPHERE</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className={`blog-card ${post.bgClass} ${post.large ? 'large-card' : ''}`}>
              <div className="card-top-row">
                <span className="tag-badge">{post.tag}</span>
                <button className="btn-circle-arrow">
                  <ArrowRight size={20} color={post.bgClass.includes('yellow') ? '#44a6d9' : post.bgClass.includes('blue') ? '#1e3a8a' : '#264790'} />
                </button>
              </div>
              <p className="post-date">{post.date}</p>
              <h3>{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
