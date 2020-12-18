import './layout/services-section.css'
import React from 'react'
import { CardComponent } from '../card-component/CardComponent'
import { Link } from 'react-scroll'

export const ServicesSectionComponent: React.FC = () => {
    return (
        <section className="services section-content" id="services"> 
            <h1 className="services-heading">Services</h1>
            <div className="service-card-holder">
                <CardComponent id="service">
                    <p className="service-text">
                        <b>Minecraft Plugin Development</b>
                        <br/> 
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui sed lacus porta ornare in quis urna. Vestibulum luctus, ipsum at cursus scelerisque, neque orci aliquet nisl, a dictum elit dui non dictumst.
                    </p>
                </CardComponent>
                <CardComponent id="service">
                    <p className="service-text">
                        <b>Web <br />Development</b>
                        <br/>
                        <br/> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui sed lacus porta ornare in quis urna. Vestibulum luctus, ipsum at cursus scelerisque, neque orci aliquet nisl, a dictum elit dui non dictumst.
                    </p> 
                </CardComponent>
                <CardComponent id="service">
                    <p className="service-text">
                        <b>Discord Bot Development</b>
                        <br/> 
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui sed lacus porta ornare in quis urna. Vestibulum luctus, ipsum at cursus scelerisque, neque orci aliquet nisl, a dictum elit dui non dictumst.
                    </p>
                </CardComponent>
            </div>
            <h2 className="services-footer">Interested in any of these?  
                <Link
                to="contact-me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >
                    &nbsp;Contact me!
                </Link>
            </h2>      
        </section>
    )
}