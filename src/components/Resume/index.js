import React from 'react';
import resumePdf from '../../assets/resume/resume.pdf';

function About() {
  return (
    <section className="resume" id="my-resume">
        <div>
            <h2>Resume</h2>
        </div>
        <div className="resume-text">
            <h3>Download <a href={resumePdf} target="_blank" rel="noreferrer">Resume</a> (pdf)</h3>
            <br></br>
            <ul>
            <li>Skills Include:</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Git</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>JQuery</li>
            <li>Node</li>
            <li>Inquirer</li>
            <li>Express</li>
            <li>Insomnia</li>
            <li>Handlebars</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>Auth0</li>
            <li>React</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>PWA</li>
            <li>JSX</li>
            </ul>
        </div>
    </section>
  );
}

export default About;