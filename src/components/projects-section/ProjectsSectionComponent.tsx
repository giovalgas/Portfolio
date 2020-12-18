import './layout/projects-section.css'

import React from 'react'
import { ProjectComponent } from '../project-component/ProjectComponent'

import MinesLogo from '../../images/mines-logo.png'
import WofLogo from '../../images/wof-logo.png'
import SiteLogo from '../../images/site-logo.png'
import UtLogo from '../../images/ut-logo.png'
import HupLogo from '../../images/hup-logo.png'
import ScLogo from '../../images/sc-logo.png'



export const ProjectsSectionComponent: React.FC = () => {
    return (
        <section className="projects section-content" id="projects"> 
            <div className="projects-holder">
                <h1 className="projects-heading">Projects</h1>

                <div className="projects-card-holder">
                    <ProjectComponent name="Wheel of Fortune" id={1} bgPhoto={WofLogo} link="https://youtu.be/i6jIrP_fZno" bgSize="90%"/>
                    <ProjectComponent name="Mines Plugin" id={0} bgPhoto={MinesLogo} link="https://github.com/giovalgas/Mines" bgSize="80%"/>
                    <ProjectComponent name="Hopper Upgrades" id={3} bgPhoto={HupLogo} link="https://www.youtube.com/watch?v=4lJks2snh1Y" bgSize="95%"/>
                    <ProjectComponent name="Ultimate Tools" id={2} bgPhoto={UtLogo} link="https://youtu.be/DD12lEPfDjo" bgSize="75%"/>
                    <ProjectComponent name="Staff Chat" id={4} bgPhoto={ScLogo} link="https://youtu.be/DNZqLixzWb8" bgSize="90%"/>
                    <ProjectComponent name="Portfolio" id={5} bgPhoto={SiteLogo} link="https://github.com/giovalgas/Portfolio" bgSize="95%"/>
                </div>
                <h2 className="projects-footer">Want to see more projects? <a href="https://github.com/giovalgas" rel="noreferrer" target="_blank">Check out my github</a></h2>
            </div>
        </section>
    )
}