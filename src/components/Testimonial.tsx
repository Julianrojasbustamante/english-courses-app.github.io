import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestimonialsSection = () => (
    <section className="py-5">
        <h2 className="section-title text-center" style={{ color: '#6400ea' }}>Lo que dicen los padres</h2>
        <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {[
                    {
                        text: "Gracias a la metodología innovadora de la profesora Elizabeth Rojas...",
                        author: "María Gómez",
                    },
                    // Agrega más testimonios aquí
                ].map((testimonial, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''} text-center`} key={index}>
                        <blockquote className="blockquote">
                            <p className="mb-4">{testimonial.text}</p>
                            <footer className="blockquote-footer">{testimonial.author}</footer>
                        </blockquote>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
);

export default TestimonialsSection;
