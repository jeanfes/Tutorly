import "../styles/sesion.css";
import Logo from "../assets/logo.png";
import ArrowBack from "../assets/arrowback.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
export function Iniciarsesion() {
    const [showEmailForm, setShowEmailForm] = useState(true);
    const inputEmailRef = useRef(null);
    const textCorreo = useRef(null);
    const textError = useRef(null);
    const buttonNextRef = useRef(null);
    const buttonLoginRef = useRef(null);
    const navigate = useNavigate();
    const handleContinueButton = () => {
        const email = inputEmailRef.current.value;
        const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos
        if (emailValidator.test(email)) {
            setShowEmailForm(false);
            textCorreo.current.innerText = email;
            textError.current.classList.add("inactive");
        } else {
            textError.current.classList.remove("inactive");
        }
    };
    const handleBackButton = () => {
        setShowEmailForm(true);
    };
    const handleLogin = () => {
        navigate("/user");
    };
    useEffect(() => {
        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                buttonNextRef.current.click();
            }
        }
        window.addEventListener("keydown", handleKeyPress);
        document.title = "Tutorly: Iniciar Sesión";
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [buttonNextRef]);
    return (
        <main className="main-sesion">
            <section className="section-sesion">
                <div className="logo">
                    <img src={Logo} alt="logo-principal" />
                    <h1>Tutorly</h1>
                </div>
                <div className="main-container" style={{ transform: showEmailForm ? "translateX(0%)" : "translateX(-55%)" }}>
                    <div className={`log-in-container_email ${showEmailForm ? "" : "ocultar"}`}>
                        <div className="log-in-title_email">
                            <p>Iniciar sesión</p>
                            <p>para continuar</p>
                        </div>
                        <div className="log-in-input_email">
                            <p className="inactive" ref={textError}>Escribe una dirección de correo válida.</p>
                            <input type="text" name="input_email" id="input_email" placeholder="Ingrese su correo" ref={inputEmailRef} autoComplete="email" />
                        </div>
                        <div className="log-in-help">
                            <div className="sign-in_link">
                                <p>No tienes cuenta?</p>
                                <Link to="/registrarse">Cree una</Link>
                            </div>
                        </div>
                        <button id="button-siguiente" onClick={handleContinueButton} ref={buttonNextRef} >
                            Siguiente
                        </button>
                    </div>
                    <div className={`log-in-container_password ${showEmailForm ? "ocultar" : ""}`}>
                        <div onClick={handleBackButton} className="log-in-back_email">
                            <picture className="arrow-back_container">
                                <img src={ArrowBack} alt="regresar" />
                            </picture>
                            <p ref={textCorreo}></p>
                        </div>
                        <div className="Log-in-title_password">
                            <p>Escribir contraseña</p>
                        </div>
                        <div className="log-in-input_password">
                            <input type="password" name="input_password" id="input_password" placeholder="Contraseña" />
                        </div>
                        <Link to="/passwordreset">Olvidaste tu contraseña?</Link>
                        <button onClick={handleLogin} ref={buttonLoginRef} id="button-iniciar-sesion">Iniciar sesión</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
