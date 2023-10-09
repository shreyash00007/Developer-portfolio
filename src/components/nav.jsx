import React, { useState, useEffect } from 'react'; // Import React and other necessary modules
import './App.css';
import './mobile.css';
import darkIcon from './assets/theme_dark.png';
import lightIcon from './assets/theme_light.png';

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark / light mode

function Nav() {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if (currentTheme === "dark") {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, [currentTheme]);

    const setTheme = () => {
        setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
    };

    const setDarkMode = () => {
        document.body.setAttributeNS(null, "theme", "dark");
        localStorage.setItem("theme", "dark");
    };

    const setLightMode = () => {
        document.body.removeAttribute("theme");
        localStorage.setItem("theme", "light");
    };

    return (
        <div>
            <header>
                <nav id="desktop-nav">
                    <div className="logo">Shreyash Dhanawade</div>
                    <div>
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li>
                                <img
                                    id="modeToggle"
                                    className="icon color-icon"
                                    src={currentTheme === "dark" ? darkIcon : lightIcon}
                                    alt="Color theme icon"
                                    onClick={setTheme}
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav id="hamburger-nav">
                    <div className="logo">Shreyash Dhanawade</div>
                    <div className="hamburger-menu">
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="menu-links">
                            <li><a href="#about" onClick={toggleMenu}>About</a></li>
                            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                            <li>
                                <img
                                    id="modeToggle2"
                                    className="icon color-icon"
                                    src={currentTheme === "dark" ? darkIcon : lightIcon}
                                    alt="Color theme icon"
                                    onClick={setTheme}
                                />
                            </li>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Nav;
