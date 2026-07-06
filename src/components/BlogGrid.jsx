import React from 'react';
import { Calendar, User } from 'lucide-react';
import './BlogGrid.css';

const blogPosts = [
  {
    id: 1,
    title: "10 Tips to Score 95%+ in Board Exams",
    excerpt: "Discover the secret strategies used by toppers to ace their CBSE and State board exams with minimal stress.",
    author: "Academic Team",
    date: "Mar 15, 2024",
    image: "/hero-img-1.png",
    category: "Exam Tips"
  },
  {
    id: 2,
    title: "Why Online Tuition is the Future",
    excerpt: "Explore how interactive virtual classrooms and personalized mentorship are changing the educational landscape.",
    author: "John Doe",
    date: "Feb 28, 2024",
    image: "/hero-img-2.png",
    category: "EdTech"
  },
  {
    id: 3,
    title: "Balancing Co-Curriculars & Studies",
    excerpt: "A guide for parents on helping their children manage time effectively between school, tuition, and hobbies.",
    author: "Sarah Smith",
    date: "Feb 10, 2024",
    image: "/hero-img-3.png",
    category: "Parenting"
  }
];

const BlogGrid = () => {
  return (
    <section className="blog-grid-section modern-section">
      <div className="container">
        <h2 className="section-title">Latest From Our Blog</h2>
        <p className="section-subtitle">Insights, tips, and news to help your child succeed</p>
        
        <div className="b-grid">
          {blogPosts.map((post, idx) => (
            <article key={post.id} className="blog-card glass-card animate-slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span><User size={14}/> {post.author}</span>
                  <span><Calendar size={14}/> {post.date}</span>
                </div>
                <button className="btn-modern btn-outline" style={{width: '100%', marginTop: '1rem'}}>Read Article</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
