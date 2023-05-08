import React from "react";
import "../sidebar/sidebar.css"
import Logo from "../../assets/logo.png";
import IconTutor from "../../assets/tutor.png"
import IconMaterias from "../../assets/materias.png"
import IconMensajes from "../../assets/mensajes.png"
import IconEquipos from "../../assets/equipos.png"
import IconArhivos from "../../assets/archivos.png"
import IconConfig from "../../assets/config.png"
export function Sidebar() {
    return (
        <React.Fragment>
            <img className="logo-sidebar" src={Logo} alt="logo tutorly"/>
            <section className="aside-content">
                <div className="icon-aside">
                    <img src={IconTutor} alt="icono del tutor" id="IconTutor"/>
                    <p>Tutores</p>
                </div>
                <div className="icon-aside">
                    <img src={IconMaterias} alt="icono de materias" id="IconMaterias"/>
                    <p>Materias</p>
                </div>
                <div className="icon-aside">
                    <img src={IconMensajes} alt="icono de mensajes" id="IconMensajes"/>
                    <p>Mensajes</p>
                </div>
                <div className="icon-aside">
                    <img src={IconEquipos} alt="icono de equipos" id="IconEquipos"/>
                    <p>Equipos</p>
                </div>
                <div className="icon-aside">
                    <img src={IconArhivos} alt="icono de archivos" id="IconArchivos"/>
                    <p>Archivos</p>
                </div>
            </section>
        </React.Fragment>
    );
}