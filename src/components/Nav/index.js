import React from 'react';

function Nav() {
    return(
        <header>
            <h1>I Made This</h1>
        <nav>
             <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Nav;