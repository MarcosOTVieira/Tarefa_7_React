import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <header className="app-header" role="banner">
            <nav className="nav" aria-label="Principal">
                <div className="brand">
                    <Link to="/">Tarefa 7 React</Link>
                </div>

                <button
                    className={`nav-toggle ${open ? "open" : ""}`}
                    aria-expanded={open}
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    onClick={() => setOpen((s) => !s)}
                >
                    <span className="hamburger" />
                </button>

                <ul className={`nav-links ${open ? "open" : ""}`}>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
}