import React from 'react';
import coverImage from "../../assets/images/hero.jpg"
import profileImage from "../../assets/images/faceless-subway.jpg"

function About() {
  return (
    <>
        <section className='my-5' style={{ backgroundImage: url({coverImage}) }}>
        </section>
        <section className="about" id="about-me">
            <div>
                <h2>About Me</h2>
            </div>
            <div className="headshot">
                <img src={profileImage} alt="a hooded person on a subway train, their face is not visible" width="320" height="320" class="faceless-subway" />
            </div>
            <div className="about-text">
                <h3>Kaijam J</h3>
                <p>After a few decades of various non-coding jobs and hobbies, I have recently returned to coding. Somehow it's simultaneously easier and harder than before. The experience so far has been extremely rewarding and very challenging.</p>
            </div>
        </section>
    </>
  );
}

export default About;