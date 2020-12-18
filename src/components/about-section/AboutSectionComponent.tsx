import React from 'react';
import { CardComponent } from '../card-component/CardComponent';
import { Link } from 'react-scroll';
import './layout/about-section.css';
import './layout/responsive.css';

export const AboutSectionComponent: React.FC = () => {
    return (
        <section className="about-me section-content" id="about-me">
            <div className="about-me-holder">
                <h1 className="about-me-heading">About me</h1>
                <CardComponent id="about-me">
                    <p className="about-me-paragraph">
                        Hello there, <br /> 
                        <br />
                        My name is Giovani Valgas. I'm a 16 year old
                        Brazilian High Schooler, ever since I had 13 
                        years of age I study software development 
                        on the internet.
                    </p>
                    <div className="about-me-button-holder">
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <button className="about-me-button btn">View Projects</button>    
                        </Link>

                        <Link
                            to="contact-me"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <button className="about-me-button btn">Contact me</button>    
                        </Link>
                    </div>
                </CardComponent>
            </div> 
        </section>
    );
}