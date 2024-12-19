import React from 'react';
import '../styles/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBrain, FaChild, FaSmile, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const LandingPage: React.FC = () => {
    return (
        <div className="container" style={{ backgroundColor: '#ffff', color: '#4A4A4A' }}>
            {/* Encabezado */}
            <header className="header text-center py-5">
                <h1 className="main-color">Bienvenidos a ELI</h1>
                <p>Aprendizaje interactivo, personalizado y divertido para todas las edades.</p>
            </header>

            {/* Beneficios */}
            <section className="section-content py-5">
                <h2 className="section-title text-center" style={{ color: '#D88AA5' }}>Beneficios de las Clases</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-4">
                        <FaBrain size={50} className="main-color" />
                        <h4 className="mt-3">Desarrollo Cognitivo</h4>
                        <p>Estimula la memoria, la concentración y el pensamiento crítico.</p>
                    </div>
                    <div className="col-md-4">
                        <FaChild size={50} style={{ color: '#D88AA5' }} />
                        <h4 className="mt-3">Habilidades Sociales</h4>
                        <p>Promueve el trabajo en equipo y la comunicación efectiva.</p>
                    </div>
                    <div className="col-md-4">
                        <FaSmile size={50} style={{ color: '#D88AA5' }} />
                        <h4 className="mt-3">Confianza y Seguridad</h4>
                        <p>Incrementa la autoestima y la motivación para aprender.</p>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-md-4">
                        <FaBook size={50} style={{ color: '#D88AA5' }} />
                        <h4 className="mt-3">Preparación Escolar</h4>
                        <p>Refuerza las áreas académicas clave para un mejor desempeño.</p>
                    </div>
                    <div className="col-md-4">
                        <FaChalkboardTeacher size={50} style={{ color: '#D88AA5' }} />
                        <h4 className="mt-3">Método Personalizado</h4>
                        <p>Clases adaptadas al ritmo y necesidades de cada estudiante.</p>
                    </div>
                </div>
            </section>

            {/* Paquetes */}
            <section className="section-content py-5">
                <h2 className="section-title text-center" style={{ color: '#D88AA5' }}>Paquetes de Clases</h2>
                <div className="row text-center">
                    <div className="col-md-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title">1 Clase</h4>
                                <p className="card-text">$50,000 COP</p>
                                <p>Incluye diagnóstico y test final.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title">4 Clases</h4>
                                <p className="card-text">$180,000 COP</p>
                                <p>Incluye diagnóstico y test final.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title">8 Clases</h4>
                                <p className="card-text">$320,000 COP</p>
                                <p>Incluye diagnóstico y test final.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title">16 Clases</h4>
                                <p className="card-text">$600,000 COP</p>
                                <p>Incluye diagnóstico y test final.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programas */}
            <section className="section-content py-5">
                <h2 className="section-title text-center" style={{ color: '#D88AA5' }}>Programas por Edad</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-6">
                        <h3>0-3 y 4-7 años</h3>
                        <p><strong>Play Dates (Estimulación Temprana - Inglés)</strong></p>
                        <p>Este programa para los más pequeños está diseñado para que los niños no solo tengan un acercamiento al idioma sino que desarrollen sus habilidades sociales. Adicionalmente, trabajarán su estimulación temprana para el desarrollo de habilidades motoras finas y gruesas a través de juegos de roles que implementen diversas habilidades.</p>
                        <p><em>Ejemplo: Playdate de bomberos. Los niños jugarán a ser bomberos mientras realizan actividades que involucren diversas áreas del conocimiento, usando materiales que desarrollen su motricidad.</em></p>
                    </div>
                    <div className="col-md-6">
                        <h3>8-12 años</h3>
                        <p><strong>Habilidades para el Aprendizaje - Inglés - Inteligencia Emocional</strong></p>
                        <p>Los niños de estas edades no solo aprenderán inglés, sino que adquirirán herramientas necesarias para que su aprendizaje en el colegio sea sencillo. Desde cómo desarrollar la atención hasta estrategias para responder exámenes y gestionar el tiempo de sus tareas efectivamente. También trabajarán en reconocer las emociones y cómo estas influyen en sus procesos de aprendizaje.</p>
                        <p><em>Ejemplo: Conocerán herramientas de comprensión lectora mientras realizan pruebas que involucren ciencia, matemáticas, sociales e inglés. Verán cómo a través del mindfulness pueden regular sus emociones y obtener mejores resultados.</em></p>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-md-6">
                        <h3>13-18 años</h3>
                        <p><strong>Orientación Vocacional - Inglés</strong></p>
                        <p>Los adolescentes explorarán sus gustos y áreas de comodidad. Tendrán simulacros de actividades relacionadas con sus futuras carreras y se dirigirán los aprendizajes escolares hacia estas profesiones. También podrán explorar diversas opciones de carrera.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>18+ años</h3>
                        <p><strong>Reading Club, Test Preparation, Speaking Club</strong></p>
                        <p>Los adultos podrán participar en clubes de lectura y conversación que les permitirán aprender y practicar inglés en un contexto real. Aquellos interesados en presentar pruebas para certificar su inglés accederán a cursos con estrategias específicas para mejorar su nivel.</p>
                    </div>
                </div>
            </section>

                {/* Textos Promocionales */}
                <section className="section-content py-5">
                <h2 className="section-title text-center" style={{ color: '#D88AA5' }}>¿Por qué elegirnos?</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-6">
                        <h4>Aprende inglés de manera divertida</h4>
                        <p>Profe Innovadora ofrece clases de inglés innovadoras para niños. ¡Descubre una forma divertida y efectiva de aprender inglés!</p>
                    </div>
                    <div className="col-md-6">
                        <h4>Clases personalizadas</h4>
                        <p>Ofrecemos un plan de aprendizaje personalizado que se adapta a las necesidades y ritmo de cada niño, asegurando su progreso.</p>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-md-6">
                        <h4>Metodologías innovadoras</h4>
                        <p>Profe Innovadora utiliza metodologías innovadoras que capturan la atención de los niños y hacen que el aprendizaje sea divertido y efectivo.</p>
                    </div>
                    <div className="col-md-6">
                        <h4>Experiencia única</h4>
                        <p>A diferencia de otras clases, nuestras lecciones ofrecen una experiencia única que combina diversión y aprendizaje, garantizando resultados positivos.</p>
                    </div>
                </div>
            </section>

                        {/* Slider de Testimonios */}
                        <section className="section-content py-5">
                <h2 className="section-title text-center" style={{ color: '#D88AA5' }}>Lo que dicen los padres</h2>
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


            {/* Contacto */}
            <section className="section-content py-5" style={{ backgroundColor: '#FFF' }}>
                <h2 className="section-title text-center" style={{ color: '#D88AA5' }}>Contacto</h2>
                <p className="text-center">¿Interesado en nuestras clases? ¡Contáctanos ahora!</p>
                <div className="text-center">
                    <button className="btn btn-lg" style={{ backgroundColor: '#D88AA5', color: '#FFF' }}>Enviar Mensaje</button>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
