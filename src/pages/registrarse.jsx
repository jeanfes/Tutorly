import React, {useRef,useState,useEffect} from "react";
import Logo from "../assets/logo.png";
import IconOjo from "../assets/ojo.png";
import "../styles/registrarse.css";
import ErrorBlack from "../assets/errorblack.svg";
import { useNavigate } from "react-router-dom";
const styles1 = {
    opacity: '0.5',
};
const styles2 = {
    opacity: '1',
};
export function Registrarse() {
    const navigate = useNavigate();
    const [currentStyle, setCurrentStyle] = useState(styles1);
    function toogleStyle() {
        if (currentStyle === styles1) {
            setCurrentStyle(styles2);
        } else {
            setCurrentStyle(styles1);
        }
    }
    const [currentStyleR, setCurrentStyleR] = useState(styles1);
    function toogleStyleR() {
        if (currentStyleR === styles1) {
            setCurrentStyleR(styles2);
        } else {
            setCurrentStyleR(styles1);
        }
    }
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePassword = () => {
        setPasswordVisible(prevState => !prevState);
    };
    const [passwordRVisible, setPasswordRVisible] = useState(false);
    const togglePasswordR = () => {
        setPasswordRVisible(prevState => !prevState)
    };
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const correoRef = useRef(null);
    const contraseñaRef = useRef(null);
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
        contraseña: /^.{8,18}$/, // 8 a 18 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const campos = {
        input_name: false,
        input_lastname: false,
        input_email: false,
        contraseña: false,
    }
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                validarcampo(expresiones.nombre, nombreRef, "input_name");
                break;
            case "apellido":
                validarcampo(expresiones.apellido, apellidoRef, "input_lastname");
                break;
            case "correo":
                validarcampo(expresiones.correo, correoRef, "input_email");
                break;
            case "contraseña":
                validarcampo(expresiones.contraseña, contraseñaRef, "contraseña");
                validarcontraseña();
                break;
            default:
                console.log(`Campo no válido: ${e.target.name}`);
                break;
        }
    }
    const validarcampo = (expresion, input ,campo) => {
        if (expresion.test(input.current.value)) {
          input.current.classList.remove("incorrecto");
          campos[campo] = true;
        } else {
          input.current.classList.add("incorrecto");
          campos[campo] = false;
        }
      }
    const inputPasswordR = useRef(null);
    const validarcontraseña = () => {
        if (inputPasswordR.current.value !== contraseñaRef.current.value) {
            inputPasswordR.current.classList.add("incorrecto");
            campos["contraseña"] = false;
        } else {
            inputPasswordR.current.classList.remove("incorrecto");
            campos["contraseña"] = true;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        let showerror = document.querySelector("#dialog_error");
        validarcampo(expresiones.nombre, nombreRef, "input_name");
        validarcampo(expresiones.apellido, apellidoRef, "input_lastname");
        validarcampo(expresiones.correo, correoRef, "input_email");
        validarcampo(expresiones.contraseña, contraseñaRef, "contraseña");
        if (campos.input_name && campos.input_lastname && campos.input_email && campos.contraseña) {
            navigate('/iniciarsesion', { replace: true });
        } else {
            showerror.classList.remove("active");
        }
    }
    useEffect(() => {
        document.title = "Tutorly: Registrarse";
      }, []);    
    return (
        <main className="main-registro">
            <section className="section-registro">
                <div className="logo">
                    <img src={Logo} alt="logo-principal" />
                    <p>Tutorly</p>
                </div>
                <div className="title">
                    <h1>Crea tu cuenta de Tutorly</h1>
                    <p>Es rápido y fácil</p>
                </div>
                <form className="form-registro" action="">
                    <div className="container1">
                        <label htmlFor="input_name">
                            <input type="text" name="nombre" ref={nombreRef} placeholder="Nombre" onBlur={validarFormulario} onKeyUp={validarFormulario}/>
                        </label>
                        <label htmlFor="input_lastname">
                            <input type="text" name="apellido" ref={apellidoRef} placeholder="Apellido" onBlur={validarFormulario} onKeyUp={validarFormulario}/>
                        </label>
                    </div>
                    <div className="container2">
                        <input type="email" name="correo" ref={correoRef} placeholder="Correo electrónico" onBlur={validarFormulario} onKeyUp={validarFormulario}/>
                    </div>
                    <div className="container3">
                        <div>
                            <input type={passwordVisible ? 'text' : 'password'}
                                name="contraseña" placeholder="Contraseña" ref={contraseñaRef} onBlur={validarFormulario} onKeyUp={validarFormulario}/>
                            <span className="mostrar-password"><img src={IconOjo} alt="ojo" style={currentStyle} onClick={() => { togglePassword(); toogleStyle(); }} /></span>
                        </div>
                        <div>
                            <input type={passwordRVisible ? 'text' : 'password'}
                                id="contraseñaR"
                                name="contraseñaR" placeholder="Repetir contraseña" ref={inputPasswordR} onBlur={validarcontraseña} onKeyUp={validarcontraseña}/>
                            <span className="mostrar-password"><img src={IconOjo} alt="ojo" style={currentStyleR} onClick={() => { togglePasswordR(); toogleStyleR() }} /></span>
                        </div>
                    </div>
                    <div className="container4">
                        <p>Fecha de nacimiento</p>
                        <div className="birthday-main_container">
                            <select name="day" id="day" title="Día de nacimiento">
                                {/* Generar opciones para los días */}
                                {Array.from({ length: 31 }, (_, index) => index + 1).map((day) =>(
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                            <select name="month" id="month" title="Mes de nacimiento">
                                {/* Generar opciones para los meses */}
                                {[
                                    "Enero",
                                    "Febrero",
                                    "Marzo",
                                    "Abril",
                                    "Mayo",
                                    "Junio",
                                    "Julio",
                                    "Agosto",
                                    "Septiembre",
                                    "Octubre",
                                    "Noviembre",
                                    "Diciembre",
                                ].map((month, index) => (
                                    <option key={index} value={index + 1}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                            <select name="year" id="year" title="Año de nacimiento">
                                {/* Generar opciones para los años */}
                                {Array.from({ length: 120 }, (_, index) => new Date().getFullYear() - index).map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="button-signin_container">
                        <div className="error-signin_container">
                            <div id="dialog_error" className="active">
                                <span></span>
                                <img src={ErrorBlack} alt="error" />
                                <p><b>Error:</b> Rellena el formulario correctamente</p>
                            </div>
                        </div>
                        <button id="button_signin" type="submit" onClick={handleSubmit}>Registrarse</button>
                    </div>
                </form>
            </section>
        </main>
    );
}