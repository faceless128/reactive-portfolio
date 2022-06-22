import React from 'react';
import resumePdf from '../../assets/resume/resume.pdf';

function Nav() {
    return(
        <header className="nav" id="nav">
            <h1>I&nbsp;Made&nbsp;This</h1>
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
                    <a href={resumePdf} target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
    </header>
    );
}

export default Nav;