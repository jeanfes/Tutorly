import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import Bell from "../../assets/bell.png";
import LogOut from "../../assets/logout.png";
import Settings from "../../assets/config.png";
import LogoTema from "../../assets/theme.png";
import LogoUsuario from "../../assets/usuario.png";
import { Search } from "./search/search";

export function Header() {
    const [classNotifications, setClaseNotifications] = useState("inactive");
    const [classProfile, setClaseProfile] = useState("inactive");
    const refNotifications = useRef(null);
    const refProfile = useRef(null);
    function toggleClassNotifications() {
        if (classNotifications === "inactive") {
            setClaseNotifications("");
            setClaseProfile("inactive");
        } else {
            setClaseNotifications("inactive");
        }
    }
    function toggleClassProfile() {
        if (classProfile === "inactive") {
            setClaseProfile("");
            setClaseNotifications("inactive");
        } else {
            setClaseProfile("inactive");
        }
    }
    function handleClickInside(event) {
        event.stopPropagation();
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                refNotifications.current &&
                !refNotifications.current.contains(event.target) &&
                refProfile.current &&
                !refProfile.current.contains(event.target)
            ) {
                setClaseNotifications("inactive");
                setClaseProfile("inactive");
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <React.Fragment>
            <section className="header-left-container">
                <Search />
            </section>
            <section className="header-right_container">
                <div className="notification_container" onClick={toggleClassNotifications} ref={refNotifications}>
                    <img src={Bell} alt="icono de notificacion" />
                </div>
                <span className={classNotifications} id="box_notification" onClick={handleClickInside}>
                    <p>Notificaciones</p>
                    <div id="notifications">
                        <p>No tienes ninguna notificacion</p>
                    </div>
                </span>
                <div className="profile_container" onClick={toggleClassProfile} ref={refProfile}>
                    <picture>
                        <p>J</p>
                    </picture>
                </div>
                <span className={classProfile} id="box_profile" onClick={handleClickInside}>
                    <ul className="user_profile">
                        <li id="user-name_container">
                            <picture id="user_img">
                                <p>J</p>
                            </picture>
                            <div className="email_container">
                                <p>jeanescobar7@hotmail.com</p>
                                <p>@jeanescobar</p>
                            </div>
                        </li>
                        <li id="midle-profile_container">
                            <div>
                                <img src={LogoUsuario} />
                                <p>Administrar Perfil</p>
                            </div>
                            <div>
                                <img src={Settings} />
                                <p>Configuracion</p>
                            </div>
                            <div>
                                <img src={LogoTema} />
                                <p>Tema</p>
                            </div>
                        </li>
                        <li id="log-out_container">
                            <img src={LogOut} />
                            <p>Cerrar sesión</p>
                        </li>
                    </ul>
                </span>
            </section>
        </React.Fragment>
    );
}
