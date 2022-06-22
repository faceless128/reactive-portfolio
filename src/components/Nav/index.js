import React from 'react';

function Nav() {
    return(
        <header className="nav" id="nav">
            <h1>I Made This</h1>
             <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
    </header>
    );
}

export default Nav;