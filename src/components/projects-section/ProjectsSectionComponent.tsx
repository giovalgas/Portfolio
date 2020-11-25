import React from 'react'
import './layout/projects-section.css'
import { ProjectComponent } from '../project-component/ProjectComponent'

export const ProjectsSectionComponent: React.FC = () => {
    return (
        <section className="projects section-content" id="projects"> 
            <div className="projects-holder">
                <h1 className="projects-heading">Projects</h1>
                <nav className="projects-nav">
                    <ul className="projects-ul"> 
                        <li className="projects-li">Everything</li>
                        <li className="projects-li">Web Development</li>
                        <li className="projects-li">Minecraft Plugins</li>
                        <li className="projects-li">Discord Bots</li>
                        <li className="projects-li">Other</li>
                    </ul>
                </nav>
                <div className="projects-card-holder">
                    <ProjectComponent name="none" id={1} bgPhoto={null}/>
                    <ProjectComponent name="none" id={1} bgPhoto={null}/>
                    <ProjectComponent name="none" id={1} bgPhoto={null}/>
                    <ProjectComponent name="none" id={1} bgPhoto={null}/>
                    <ProjectComponent name="none" id={1} bgPhoto={null}/>
                    <ProjectComponent name="none" id={1} bgPhoto={null}/>
                    <ProjectComponent name="none" id={1} bgPhoto={null}/>
                    <ProjectComponent name="none" id={1} bgPhoto={null}/>
                </div>
                <h2 className="projects-footer">Want to see more projects? <a href="https://github.com/giovalgas" rel="noreferrer" target="_blank">Check out my github</a></h2>
            </div>
        </section>
    )
}