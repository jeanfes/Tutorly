import "../styles/user.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { Sidebar } from "../components/sidebar/sidebar.jsx";
import { Header } from "../components/header/header.jsx";
import { Tutores } from "../components/tutores/tutores.jsx";
import { Materias } from "../components/materias/materias.jsx";
import { Mensajes } from "../components/mensajes/mensajes.jsx";
import { Equipos } from "../components/equipos/equipos.jsx";
import { Archivos } from "../components/archivos/archivos.jsx";

export function User() {
    useEffect(() => {
        document.title = "Tutorly";
      }, []);
    return (
        <div className="home_container">
            <aside className="home-sidebar_container">
                <Sidebar />
            </aside>
            <header className="home-header_container">
                <Header />
            </header>
            <main className="home-routes_container">
                <Routes>
                    <Route exact path="/tutores" element={<Tutores />} />
                    <Route path="/materias" element={<Materias />} />
                    <Route path="/mensajes" element={<Mensajes />} />
                    <Route path="/equipos" element={<Equipos />} />
                    <Route path="/archivos" element={<Archivos />} />
                </Routes>
            </main>
        </div>
    );
}
