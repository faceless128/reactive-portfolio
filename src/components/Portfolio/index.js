import React from 'react';

function Nav() {
    return (
        <section className="portfolio" id="portfolio">
            <div>
                <h2>Portfolio</h2>
            </div>
            <div className="projects">
                <div className="small-project" id="it-takes-a-city">
                    <span> It Takes A City </span> &nbsp; 
                    <a href="https://it-takes-a-city.herokuapp.com/"> Live </a> | 
                    <a href="https://github.com/cwarmbrunn/it-takes-a-city/"> GitHub </a>
                    <img src={require("../../assets/images/it-takes-a-city.png")} alt="It Takes A City Website" />
                </div>
                <div className="small-project" id="tech-blog">
                    <span> Tech Blog </span> &nbsp; 
                    <a href="https://faceless-tech-blog.herokuapp.com/"> Live </a> | 
                    <a href="https://www.github.com/faceless128/tech-blog/"> GitHub </a>
                    <img src={require("../../assets/images/tech-blog.png")} alt="Tech Blog Website" />
                </div>
                <div className="small-project" id="shooting-star">
                    <span> NBA Statcat </span> &nbsp; 
                    <a href="https://faceless128.github.io/shooting-star/"> Live </a> | 
                    <a href="https://www.github.com/faceless128/shooting-star/"> GitHub </a>
                    <img src={require("../../assets/images/shooting-star.png")} alt="Shooting Star NBA Statcat Website" />
                </div>
                <div className="small-project" id="weather-dashboard">
                    <span> Weather Dashboard </span> &nbsp; 
                    <a href="https://faceless128.github.io/weather-dashboard/"> Live </a> | 
                    <a href="https://www.github.com/faceless128/weather-dashboard/"> GitHub </a>
                    <img src={require("../../assets/images/weather-dashboard.png")} alt="Weather Dashboard Website" />
                </div>
                <div className="small-project" id="workday-scheduler">
                    <span> Workday Scheduler </span> &nbsp; 
                    <a href="https://faceless128.github.io/workday-scheduler/"> Live </a> | 
                    <a href="https://www.github.com/faceless128/workday-scheduler/"> GitHub </a>
                    <img src={require("../../assets/images/workday-scheduler.png")} alt="Workday Scheduler Webpage" />
                </div>
                <div className="small-project" id="code-quiz">
                    <span> Coding Quiz </span> &nbsp; 
                    <a href="https://faceless128.github.io/quiz-code/"> Live </a> | 
                    <a href="https://www.github.com/faceless128/quiz-code/"> GitHub </a>
                    <img src={require("../../assets/images/code-quiz.png")} alt="Coding Quiz Website" />
                </div>
            </div>
        </section>
    );
}

export default Nav;