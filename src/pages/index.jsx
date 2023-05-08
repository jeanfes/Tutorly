import React, { useState, useRef } from 'react';
import "../styles/inicio.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoFacebook from "../assets/facebook.png";
import LogoTwitter from "../assets/twitter.png";
import LogoYoutube from "../assets/youtube.png";
import Niño1 from "../assets/niño-estudiando.jpg";
import Niño2 from "../assets/niña-en-clase.jpg";
import IconMatematicas from "../assets/matematicas.png";
import IconInformatica from "../assets/informatica.png";
import IconCiencia from "../assets/ciencia.png";
import IconIdiomas from "../assets/idiomas.png";
import IconTutores from "../assets/icontutores.png";
import IconManejoNiños from "../assets/iconmanejoniños.png";
import IconGruposEstudio from "../assets/icongruposestudio.png";

export function Index() {
    const [showVideo, setShowVideo] = useState(false);
    const mainInicio = useRef(null);
    const handleToggleVideo = () => {
        setShowVideo(!showVideo);
        mainInicio.current.style.cursor = "pointer";
    };
    const handleHideVideo = () => {
        if (showVideo == true) {
            setShowVideo(false);
            mainInicio.current.style.cursor = "initial";
        }
    };
    return (
        <div ref={mainInicio} onClick={handleHideVideo} className="main-container_inicio">
            <header className="header-inicio">
                <nav className="navbar-container">
                    <div className="logo-container">
                        <img src={Logo} alt="logo-principal" />
                        <p>TUTORLY</p>
                    </div>
                    <div className="buttons-container">
                        <Link to="/registrarse">Registrarse</Link>
                        <Link to="/iniciarsesion">Iniciar Sesion</Link>
                    </div>
                </nav>
                <section className="introduction-main-container">
                    <section className="main-text-container">
                        <h1>La educación es la capacidad de hacer frente a las situaciones de la vida</h1>
                        <p>Cualquier persona puede aprender y desarrollar sus habilidades si se lo propone</p>
                    </section>
                    <section className="main-button-container">
                        <div className="button-container_tutorial">
                            <button onClick={handleToggleVideo}>
                                <div className="play"></div>
                            </button>
                            <p>Ver tutorial</p>
                        </div>
                        {showVideo && (
                            <div className="video-overlay">
                                <div className='video-container'>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube-nocookie.com/embed/yf0J_CaXDmU?controls=0&autoplay=1&loop=1&playlist=yf0J_CaXDmU&modestbranding=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        referrerPolicy="no-referrer"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </section>
                    <section className="main-container-img">
                        <span className="imagen1"></span>
                        <span className="imagen2"></span>
                        <span className="imagen3"></span>
                        <span className="imagen4"></span>
                    </section>
                </section>
            </header>
            <main className="main-inicio">
                <section className="courses-main-container">
                    <div className="courses-text-container">
                        <h2>Que puedes aprender con nosostros?</h2>
                        <p>La educación es un proceso de aprendizaje, adquiriendo conocimientos y creciendo cada día, siendo capaces de sobresalir en el campo donde quiera que vayamos.</p>
                    </div>
                    <div className="main-cards-container">
                        <article className="card-container">
                            <div className="card_img">
                                <img src={IconCiencia} alt="icono de ciencia" />
                            </div>
                            <h3 className="title-card">Ciencia</h3>
                            <p>Tutorías individuales o en grupo para mejorar tus habilidades en física, química y biología.</p>
                        </article>
                        <article className="card-container">
                            <div className="card_img">
                                <img src={IconIdiomas} alt="icono de lenguaje" />
                            </div>
                            <h3 className="title-card">Idiomas</h3>
                            <p>Podrás encontrar ayuda en áreas como gramática, ortografía, redacción y comprensión de lectura.</p>
                        </article>
                        <article className="card-container">
                            <div className="card_img">
                                <img src={IconInformatica} alt="icono de programacion" />
                            </div>
                            <h3 className="title-card">Informática</h3>
                            <p>Recibe orientación en áreas como diseño web, programación, bases de datos y ciberseguridad.</p>
                        </article>
                        <article className="card-container">
                            <div className="card_img">
                                <img src={IconMatematicas} alt="icono de matematicas" />
                            </div>
                            <h3 className="title-card">Matemáticas</h3>
                            <p>Aquí encontrarás tutorías individuales o en grupo para temas como álgebra, geometría, cálculo y más.</p>
                        </article>
                    </div>
                </section>
                <section className="main-stadistics">
                    <div className="stadistics-container">
                        <img src={Niño1} alt="niño estudiando" />
                        <div className="stadistics-info">
                            <p className="tile-stadistics">Estadisticas</p>
                            <h2>Para nosotros es un placer ayudarte</h2>
                            <p className="text-stadistics">Tutorly ofrece una variedad de tutores expertos y personalizados para satisfacer las necesidades únicas de cada estudiante, creando un ambiente de aprendizaje efectivo y colaborativo, también nos aseguramos de que nuestros tutores sean alentadores, para que los estudiantes se sientan motivados durante sus tutorías. Únete a nuestra comunidad de aprendizaje para descubrir cómo podemos ayudarte a alcanzar el éxito académico que mereces.</p>
                            <span>1.58k<p>Estudiantes</p></span>
                        </div>
                    </div>
                </section>
                <section className="community-conatiner">
                    <div className="article-container_community">
                        <article className="article_community">
                            <picture className="picture1"><img src={IconTutores} alt="icono de tutores" /></picture>
                            <h3>Tutores Expertos</h3>
                            <p>Tutores altamente capacitados en su campo de estudio, brindando un enfoque personalizado en cualquier tema para ayudartes a alcanzar tu máximo potencial académico.</p>
                            <a href="/">Leer mas</a>
                        </article>
                        <article className="article_community">
                            <picture className="picture2"><img src={IconManejoNiños} alt="icono de niños" /></picture>
                            <h3>Manejo de niños</h3>
                            <p>Tutores especializados en el manejo de niños, brindando un enfoque personalizado para ayudar a tus hijos a desarrollar habilidades académicas en un ambiente seguro y de apoyo.</p>
                            <a href="/">Leer mas</a>
                        </article>
                        <article className="article_community">
                            <picture className="picture3"><img src={IconGruposEstudio} alt="grupos de estudio" /></picture>
                            <h3>Grupos de estudio</h3>
                            <p>Sesiones de estudio en grupo lideradas por tutores experimentados para mejorar el rendimiento académico. Únete a nuestra comunidad para alcanzar tus objetivos académicos.</p>
                            <a href="/">Leer mas</a>
                        </article>
                    </div>
                </section>
                <section className="frequently-questions">
                    <img src={Niño2} alt="niña en el celular" />
                    <div className="questions-container">
                        <div className="questions-title">
                            <h2>Preguntas frecuentes</h2>
                        </div>
                        <details className="details-container">
                            <summary>Las tutorias son pregrabadas?</summary>
                            <p>No, en Tutorly ofrecemos tutorías en vivo y personalizadas para cada estudiante. Creemos que la interacción en tiempo real con un tutor es la forma más efectiva de aprender y mejorar en cualquier materia o habilidad.</p>
                        </details>
                        <details className="details-container">
                            <summary>Cuanto tiempo puede durar una tutoria?</summary>
                            <p>En Tutorly, ofrecemos tutorías flexibles que se adaptan a las necesidades de cada estudiante. La duración de una tutoría puede variar según las preferencias del estudiante y la disponibilidad del tutor. Sin embargo, la duración típica de una sesión es de una hora.</p>
                        </details>
                        <details className="details-container">
                            <summary>Puedes grabar las tutorias?</summary>
                            <p>No, en Tutorly no ofrecemos la opción de grabar las tutorías. Creemos que es importante que los estudiantes y tutores interactúen en tiempo real durante las sesiones de tutoría. Además, la grabación de sesiones de tutoría puede afectar la privacidad y confidencialidad de los estudiantes.</p>
                        </details>
                    </div>
                </section>
            </main>
            <footer className="footer-inicio">
                <section className="footer-container-social">
                    <div className="footer-container_img">
                        <img src={Logo} alt="logo principal" />
                        <p>TUTORLY</p>
                    </div>
                    <p className="footer-container_text">Aprendizaje efectivo, en cualquier lugar  y en cualquier momento.</p>
                    <div className="footer_social">
                        <a href="/"><img src={LogoFacebook} alt="logo de facebook" /></a>
                        <a href="/"><img src={LogoTwitter} alt="logo de twiter" /></a>
                        <a href="/"><img src={LogoYoutube} alt="logo de youtube" /></a>
                    </div>
                </section>
                <section className="footer-container-ASP">
                    <ul className="footer-container_aboutus">
                        <li>
                            <p>Nosotros</p>
                        </li>
                        <li><a href="/">Contactanos</a></li>
                        <li><a href="/">Comunidad</a></li>
                        <li><a href="/">Objetivos</a></li>
                    </ul>
                    <ul className="footer-container_product">
                        <li>
                            <p>Servicios</p>
                        </li>
                        <li><a href="/">Patrocinios</a></li>
                        <li><a href="/">Empresas</a></li>
                        <li><a href="/">Precios</a></li>
                    </ul>
                    <ul className="footer-container_subjects">
                        <li>
                            <p>Ayuda</p>
                        </li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Soporte</a></li>
                        <li><a href="/">Foro</a></li>
                    </ul>
                </section>
                <section className="footer-container-down">
                    <ul>
                        <li><p>© 2023 Derechos Reservados </p></li>
                        <li>
                            <a href="/">Privacidad</a>
                            <a href="/">Terminos & condiciones</a>
                            <a href="/">Seguridad</a>
                        </li>
                    </ul>
                </section>
            </footer>
        </div>
    );
}