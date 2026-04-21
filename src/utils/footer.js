import React from "react";
import "../css/footer.css";

export default function Footer() {
    const integrantes = ["Marcos Vieira", "Victor Rosseto", "Guilherme Gonçalves"];

    return (
        <footer className="app-footer" role="contentinfo">
            <div className="footer-inner">
                <div className="footer-brand">Tarefa 7 React</div>

                <ul className="footer-list" aria-label="Integrantes">
                    {integrantes.map((nome, i) => (
                        <li key={i}>{nome}</li>
                    ))}
                </ul>

                <div className="footer-copy">UniFacens © {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
}