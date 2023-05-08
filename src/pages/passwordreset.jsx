import "../styles/passwordreset.css";
import React, { useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";

export function Passwordreset() {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const inputEmailRef = useRef(null);
    const buttonConfirm = useRef(null);
    const handleConfirmClick = () => {
        const email = inputEmailRef.current.value;
        const errorText = document.querySelector(".error-email-recuperation");
        const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos
        if (emailValidator.test(email)) {
            document.querySelector("#correo-recuperation").innerText = email;
            setShowConfirmPassword(true);
        } else {
            errorText.classList.remove("hidden");
        }
    };
    useEffect(() => {
        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                buttonConfirm.current.click();
            }
        }
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    return (
        <main className="main-password-reset">
            <section className="section-password-reset">
                <div className={showConfirmPassword ? "hidden" : "container-password-reset"}>
                    <div className="container-button-reset">
                        <h4>Revisa tu correo y sigue las instrucciones</h4>
                        <p>Te enviaremos un enlace a tu correo para que puedas cambiar la contraseña</p>
                        <p className="error-email-recuperation hidden">Escribe una dirección de correo válida.</p>
                        <input type="text" placeholder="Ingrese su correo" id="input_email_reset" autoComplete="email" ref={inputEmailRef} />
                        <button ref={buttonConfirm} onClick={handleConfirmClick}>Cambiar mi contraseña</button>
                    </div>
                    <Link to="/iniciarsesion">Regresar a inicio de sesión</Link>
                </div>
                <div className={showConfirmPassword ? "container-confirm-password" : "hidden"}>
                    <div class="icon-email_animation"></div>
                    <h4>Revisa tu correo y sigue las instrucciones</h4>
                    <p>Te hemos enviado un correo a <b id="correo-recuperation"></b> con las instrucciones para cambiar tu contraseña.</p>
                    <i>*Revisa la bandeja de spam*</i>
                </div>
            </section>
        </main>
    );
}
