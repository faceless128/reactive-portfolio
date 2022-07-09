import React from 'react';
import profileImage from "../../assets/images/faceless-subway.jpg"

function About() {
  return (
    <>
      <section className='hero'>
      </section>
      <section className="about" id="about-me">
        <div>
          <h2>About Me</h2>
        </div>
        <div className="headshot">
          <img src={profileImage} alt="a hooded person on a subway train, their face is not visible" width="320" height="320" className="faceless-subway" />
        </div>
        <div className="about-text">
          <h3>Kaijam Jeffers</h3>
          <p>
            Hi, I'm Kaijam (the 'j' is silent) and I am a Full Stack Web Developer with a Certificate from Michigan State University. When I am not coding, I enjoy Music, Sci-Fi, Video Games, Walking and NBA Basketball.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;