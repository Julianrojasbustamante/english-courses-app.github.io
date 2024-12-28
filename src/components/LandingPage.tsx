import React, { JSX } from 'react';
import '../styles/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaBrain,
    FaChild,
    FaSmile,
    FaBook,
    FaChalkboardTeacher,
    FaWhatsapp
} from 'react-icons/fa';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="section-title text-center" style={{ color: '#6400ea' }}>{title}</h2>
);

const BenefitCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="col-md-4 text-center">
        {icon}
        <h4 className="mt-3">{title}</h4>
        <p>{description}</p>
    </div>
);

const PackageCard: React.FC<{ title: string; price: string; description: string }> = ({ title, price, description }) => (
    <div className="col-md-3">
        <div className="card shadow-sm">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{price}</p>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

const ProgramDescription: React.FC<{ ageGroup: string; title: string; details: string; example?: string }> = ({ ageGroup, title, details, example }) => (
    <div className="col-md-6">
        <h3>{ageGroup}</h3>
        <p><strong>{title}</strong></p>
        <p>{details}</p>
        {example && <p><em>{example}</em></p>}
    </div>
);

const Testimonial: React.FC<{ text: string; author: string }> = ({ text, author }) => (
    <div className="carousel-item text-center">
        <blockquote className="blockquote">
            <p className="mb-4">"{text}"</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    </div>
);

const LandingPage: React.FC = () => {
    return (
        <div className="" style={{ backgroundColor: '#ffff', color: '#4A4A4A' }}>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="#">
                    <img src={require('../assets/images/logo.png')} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                    <img src={require('../assets/images/logo-text.jpg')} alt="" width="70" height="24" className="d-inline-block align-text-top"></img>
                    </a>
                    <div className="d-flex">
                    <a target="_blank" 
                        className="btn btn-md" 
                         href="https://api.whatsapp.com/send/?phone=573196977843&text=Me+interesa+conocer+informaci%C3%B3n+sobre+las+clases+de+Caroland"
                        style={{ backgroundColor: '#6400ea', color: '#FFF' }}><FaWhatsapp size={34} className="text-white py-1" /> Escribenos</a>
                    </div>
                </div>
            </nav>
            <header className="header">
                <div className="header-overlay">
                    <h1 className='main-color'>Bienvenidos a Caroland</h1>
                    <h5>Soy Elizabeth Rojas, profesora con maestría en psicopedagogía, y estoy aquí para ofrecer a tus hijos una experiencia de aprendizaje interactiva, personalizada y llena de diversión. ¡Aprender será tan emocionante como jugar!</h5>
                </div>
            </header>
            <div className="container">
            <section className="section-content py-5">
                <SectionHeader title="Beneficios de las Clases" />
                <div className="row text-center mt-4">
                    <BenefitCard icon={<FaBrain size={50} className="main-color" />} title="Desarrollo Cognitivo" description="Estimula la memoria, la concentración y el pensamiento crítico." />
                    <BenefitCard icon={<FaChild size={50} style={{ color: '#6400ea' }} />} title="Habilidades Sociales" description="Promueve el trabajo en equipo y la comunicación efectiva." />
                    <BenefitCard icon={<FaSmile size={50} style={{ color: '#6400ea' }} />} title="Confianza y Seguridad" description="Incrementa la autoestima y la motivación para aprender." />
                </div>
                <div className="row text-center mt-4">
                    <BenefitCard icon={<FaBook size={50} style={{ color: '#6400ea' }} />} title="Preparación Escolar" description="Refuerza las áreas académicas clave para un mejor desempeño." />
                    <BenefitCard icon={<FaChalkboardTeacher size={50} style={{ color: '#6400ea' }} />} title="Método Personalizado" description="Clases adaptadas al ritmo y necesidades de cada estudiante." />
                </div>
            </section>
            <section className="section-content py-5 bg-light">
                <SectionHeader title="Paquetes de Clases" />
                <div className="container">
                    <div className="row justify-content-center text-center">
                    {[
                        { title: "1 Clase", price: "$50,000 COP", description: "Incluye diagnóstico y test final." },
                        { title: "4 Clases", price: "$180,000 COP", description: "Incluye diagnóstico y test final." },
                        { title: "8 Clases", price: "$320,000 COP", description: "Incluye diagnóstico y test final." },
                        { title: "16 Clases", price: "$600,000 COP", description: "Incluye diagnóstico y test final." },
                    ].map((pkg, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                        <div className="card package-card shadow-sm border-0 h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                            <h5 className="card-title fw-bold text-primary">{pkg.title}</h5>
                            <p className="price h2 text-dark fw-bold">{pkg.price}</p>
                            <p className="card-text text-muted">{pkg.description}</p>
                            <button className="btn btn-primary mt-3 fw-bold px-4 py-2">
                                Elegir Paquete
                            </button>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </section>


            <section className="section-content py-5">
                <SectionHeader title="Programas por Edad" />
                <div className="row text-center mt-4">
                    <ProgramDescription
                        ageGroup="0-3 y 4-7 años"
                        title="Play Dates (Estimulación Temprana - Inglés)"
                        details="Este programa para los más pequeños está diseñado para que los niños no solo tengan un acercamiento al idioma sino que desarrollen sus habilidades sociales."
                        example="Ejemplo: Playdate de bomberos. Los niños jugarán a ser bomberos mientras realizan actividades que involucren diversas áreas del conocimiento."
                    />
                    <ProgramDescription
                        ageGroup="8-12 años"
                        title="Habilidades para el Aprendizaje - Inglés - Inteligencia Emocional"
                        details="Los niños aprenderán inglés y adquirirán herramientas para el aprendizaje escolar."
                        example="Ejemplo: Conocerán herramientas de comprensión lectora mientras realizan pruebas."
                    />
                </div>
                <div className="row text-center mt-4">
                    <ProgramDescription
                        ageGroup="13-18 años"
                        title="Orientación Vocacional - Inglés"
                        details="Los adolescentes explorarán sus gustos y áreas de comodidad, con simulacros de actividades relacionadas con sus futuras carreras."
                    />
                    <ProgramDescription
                        ageGroup="18+ años"
                        title="Reading Club, Test Preparation, Speaking Club"
                        details="Los adultos podrán participar en clubes de lectura y conversación para mejorar su inglés en contextos reales."
                    />
                </div>
            </section>
     {/* Textos Promocionales */}
     <section className="section-content py-5">
                <h2 className="section-title text-center" style={{ color: '#6400ea' }}>¿Por qué elegirme?</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-6">
                        <h4>Clases divertidas</h4>
                        <p> Hacemos que el aprendizaje sea una experiencia agradable para tus hijos.</p>
                    </div>
                    <div className="col-md-6">
                        <h4>Personalización</h4>
                        <p>Cada niño es único, por eso adapto mis clases a sus intereses y ritmo.</p>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-md-6">
                        <h4>Metodologías innovadoras</h4>
                        <p>Uso técnicas modernas y probadas que capturan la atención y logran resultados efectivos.</p>
                    </div>
                    <div className="col-md-6">
                        <h4>Resultados Garantizados</h4>
                        <p>Uso técnicas modernas y probadas que capturan la atención y logran resultados efectivos.</p>
                    </div>
                </div>
            </section>

                        {/* Slider de Testimonios */}
                        <section className="section-content py-5">
                <h2 className="section-title text-center" style={{ color: '#6400ea' }}>Lo que dicen los padres</h2>
                <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <blockquote className="blockquote">
                                <p className="mb-4">"Gracias a la metodología innovadora de la profesora Elizabeth Rojas, mi hijo ha mejorado notablemente su nivel de inglés. Las clases son interactivas y divertidas, lo que le ha motivado a aprender más. Estoy muy agradecida por su dedicación y profesionalismo."</p>
                                <footer className="blockquote-footer">María Gómez</footer>
                            </blockquote>
                        </div>
                        <div className="carousel-item text-center">
                            <blockquote className="blockquote">
                                <p className="mb-4">"La profesora Elizabeth Rojas ha revolucionado el aprendizaje de inglés para mi hijo. Sus clases son dinámicas y llenas de creatividad, lo que ha despertado su entusiasmo por el idioma. Estamos muy satisfechos con los resultados obtenidos en poco tiempo."</p>
                                <footer className="blockquote-footer">Luis Fernando Pérez</footer>
                            </blockquote>
                        </div>
                        <div className="carousel-item text-center">
                            <blockquote className="blockquote">
                                <p className="mb-4">"Mi hija ama las clases de la profesora Elizabeth Rojas. No solo ha mejorado su inglés, sino también su confianza al hablar. Es impresionante cómo disfruta cada sesión."</p>
                                <footer className="blockquote-footer">Ana Martínez</footer>
                            </blockquote>
                        </div>
                        <div className="carousel-item text-center">
                            <blockquote className="blockquote">
                                <p className="mb-4">"Las clases de inglés de Elizabeth han sido transformadoras para mis hijos. La combinación de juegos y aprendizaje ha hecho que el idioma sea algo natural para ellos."</p>
                                <footer className="blockquote-footer">Carlos Mejía</footer>
                            </blockquote>
                        </div>
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

            </div>


            {/* Contacto */}
            <div className="contact-us pb-5">
                <div className="contact-us-overlay">
                    <h2 className="section-title text-center" style={{ color: '#6400ea' }}>¿Interesado en nuestras clases?</h2>
                    <h3 className="text-center pb-3">¡Contáctanos ahora!</h3>
                    <div className="text-center">
                    <a target="_blank" 
                        className="btn btn-md" 
                         href="https://api.whatsapp.com/send/?phone=573196977843&text=Me+interesa+conocer+informaci%C3%B3n+sobre+las+clases+de+Caroland"
                        style={{ backgroundColor: '#6400ea', color: '#FFF' }}><FaWhatsapp size={34} className="text-white py-1" /> Escribenos</a>
                    </div>
                </div>
            </div>
            <footer className="footer text-center py-4 bg-dark text-white">
                <p>© 2025 Caroland - Aprendizaje Interactivo. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
