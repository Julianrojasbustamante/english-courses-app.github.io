import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestimonialsSection = () => (
    <section className="py-5">
        <h2 className="section-title text-center" style={{ color: '#6400ea' }}>Lo que dicen los padres</h2>
        <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {[
                    {
                        text: "Gracias a la metodología innovadora de la profesora Elizabeth Rojas, mi hijo ha mejorado notablemente su nivel de inglés. Las clases son interactivas y divertidas, lo que le ha motivado a aprender más. Estoy muy agradecida por su dedicación y profesionalismo.",
                        author: "María Gómez",
                    },
                    {
                        text: "La profesora Elizabeth Rojas ha revolucionado el aprendizaje de inglés para mi hijo. Sus clases son dinámicas y llenas de creatividad, lo que ha despertado su entusiasmo por el idioma. Estamos muy satisfechos con los resultados obtenidos en poco tiempo.",
                        author: "Luis Fernando Pérez",
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
