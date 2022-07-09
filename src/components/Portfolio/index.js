import React, { useState } from 'react';

function Nav() {
  const [portfolios] = useState([
    {
      name: "It Takes A City",
      deployment: "https://it-takes-a-city.herokuapp.com/",
      github: "https://github.com/cwarmbrunn/it-takes-a-city/",
      imgSrc: "it-takes-a-city",
      description: "A way to help people in need find resources like food and shelter. A Team Project utilizing Javascript, MongoDB, EJS, Taliwind and Auth0. I floated between Front End and Back End working with JS, Tailwind, Mongo interactions and Heroku deployment."
    },
    {
      name: "Tech Blog",
      deployment: "https://faceless-tech-blog.herokuapp.com/",
      github: "https://www.github.com/faceless128/tech-blog/",
      imgSrc: "tech-blog",
      description: "A blogging system that features user management, post management, comments and voting. Built using Javascript, Node, MySQL, Sequelize and Express."
    },
    {
      name: "NBA Statcat",
      deployment: "https://faceless128.github.io/shooting-star/",
      github: "https://www.github.com/faceless128/shooting-star/",
      imgSrc: "shooting-star",
      description: "Compare the stats of NBA teams in two cities against each other! A Team Project utilizing HTML, CSS, Javascript, PureCSS, Materialize and location and NBA APIs. I floated between Front End and Back End working with the location API and layout of the team comparison statistics."
    },
    {
      name: "Weather Dashboard",
      deployment: "https://faceless128.github.io/weather-dashboard/",
      github: "https://www.github.com/faceless128/weather-dashboard/",
      imgSrc: "weather-dashboard",
      description: "A weather dashboard with current conditions and five day forecasts. Utilizes Javascript, JQuery, Bootstrap, Iconic and  openweathermap and geocode APIs."
    },
    {
      name: "Workday Scheduler",
      deployment: "https://faceless128.github.io/workday-scheduler/",
      github: "https://www.github.com/faceless128/workday-scheduler/",
      imgSrc: "workday-scheduler",
      description: "A scheduling application to track tasks for the current day. Uses HTML, CSS, Javascript, JQuery, Font-Awesome and Iconic."
    },
    {
      name: "Coding Quiz",
      deployment: "https://faceless128.github.io/quiz-code/",
      github: "https://www.github.com/faceless128/quiz-code/",
      imgSrc: "code-quiz",
      description: "A password generator with options for lowercase letters, uppercase letters, numbers and special characters. Built with HTML, CSS and JavaScript."
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
            <a href={project.deployment}><img src={require(`../../assets/images/${project.imgSrc}.png`)} alt={`${project.name} Website`} /></a>
            <a href={project.github}> Github Repo</a>
            <p className="project-text"> {project.description} </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Nav;