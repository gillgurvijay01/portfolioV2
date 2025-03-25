import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('blogs');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const newsletters = [
    {
      title: "GillThinks Newsletter",
      description: "Stay updated with my latest thoughts, tutorials, and insights about software development, technology trends, and my journey in tech.",
      link: "https://gillthinks.hashnode.dev/newsletter"
    }
  ];

  return (
    <div id="blogs" className={`blogs-section ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Blogs & Newsletters</h2>
      
      {/* Main Blog Section */}
      <Card className="main-blog-card">
        <Card.Body>
          <Card.Title>My Tech Journey & Insights</Card.Title>
          <Card.Text>
            I share my experiences, insights, and learnings through my Hashnode blog. 
            Join me on my journey of growth and discovery in the world of technology.
          </Card.Text>
          <div className="blog-actions">
            <a 
              href="https://gillthinks.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
              className="blog-button"
            >
              Read My Blogs
            </a>
            <a 
              href="https://hashnode.com/@gillgurvijay01"
              target="_blank"
              rel="noreferrer"
              className="profile-button"
            >
              View Hashnode Profile
            </a>
          </div>
        </Card.Body>
      </Card>

      {/* Newsletters Section */}
      <h3 className="newsletters-title">My Newsletters</h3>
      <div className="newsletters-grid">
        {newsletters.map((newsletter, index) => (
          <Card key={index} className="newsletter-card">
            <Card.Body>
              <Card.Title>{newsletter.title}</Card.Title>
              <Card.Text>{newsletter.description}</Card.Text>
              <a 
                href={newsletter.link}
                target="_blank"
                rel="noreferrer"
                className="subscribe-button"
              >
                Subscribe Now
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs; 