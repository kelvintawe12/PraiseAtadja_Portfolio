import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      role: "Director, Cardiac TEK",
      content: "Praise's work on our AI diagnostic tool revolutionized our screening process, increasing accuracy by 15%.",
      avatar: "👩‍⚕️"
    },
    {
      id: 2,
      name: "Prof. John Doe",
      role: "Head of Computer Science",
      content: "One of the most talented students I've taught, with exceptional skills in machine learning applications.",
      avatar: "👨‍🏫"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "CEO, She Innovate",
      content: "Praise's leadership in our tech education program has impacted hundreds of young women in STEM.",
      avatar: "👩‍💼"
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What People Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-avatar">{testimonial.avatar}</div>
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
