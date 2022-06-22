import React, { useState } from 'react';

function Nav() {
    const [portfolios] = useState([
        {
            name: "It Takes A City",
            deployment: "https://it-takes-a-city.herokuapp.com/",
            github: "https://github.com/cwarmbrunn/it-takes-a-city/",
            imgSrc: "it-takes-a-city"
        },
        {
            name: "Tech Blog",
            deployment: "https://faceless-tech-blog.herokuapp.com/",
            github: "https://www.github.com/faceless128/tech-blog/",
            imgSrc: "tech-blog"
        },
        {
            name: "NBA Statcat",
            deployment: "https://faceless128.github.io/shooting-star/",
            github: "https://www.github.com/faceless128/shooting-star/",
            imgSrc: "shooting-star"
        },
        {
            name: "Weather Dashboard",
            deployment: "https://faceless128.github.io/weather-dashboard/",
            github: "https://www.github.com/faceless128/weather-dashboard/",
            imgSrc: "weather-dashboard"
        },
        {
            name: "Workday Scheduler",
            deployment: "https://faceless128.github.io/workday-scheduler/",
            github: "https://www.github.com/faceless128/workday-scheduler/",
            imgSrc: "workday-scheduler"
        },
        {
            name: "Coding Quiz",
            deployment: "https://faceless128.github.io/quiz-code/",
            github: "https://www.github.com/faceless128/quiz-code/",
            imgSrc: "code-quiz"
        }
    ])
    return (
        <section className="portfolio" id="portfolio">
            <div>
                <h2>Portfolio</h2>
            </div>
            <div className="projects">
                {portfolios.map((project, i) => (
                    <div className="small-project" id={project.imgSrc}>
                        <span> {project.name} </span> &nbsp; 
                        <a href={project.deployment}><img src={require(`../../assets/images/${project.imgSrc}.png`)} alt={`${project.name} Website`}/></a>
                        <a href={project.github}> GitHub </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Nav;