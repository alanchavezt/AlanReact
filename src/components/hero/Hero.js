import React from 'react';
import "./Hero.css"

const Hero = (props) => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Alan Chavez</h1>
                <p>
                    I'm
                    <span className="typed" data-typed-items="Software Engineer, Designer, Freelancer">
                    </span>
                </p>
            </div>
        </section>
    );
}

export default Hero;
