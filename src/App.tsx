import './css/app.css'
import React from 'react'
import { NavComponent } from './components/nav-component/NavComponent'
import { MenuSectionComponent } from './components/menu-section/MenuSectionComponent'
import { AboutSectionComponent } from './components/about-section/AboutSectionComponent'
import { ServicesSectionComponent } from './components/services-section/ServicesSectionComponent'
import { ProjectsSectionComponent } from './components/projects-section/ProjectsSectionComponent'
import { ContactSectionComponent } from './components/contact-section/ContactSectionComponent'

export const App: React.FC = () => {
    return (
        <div className="App">
            <NavComponent />
            <div className="content">
                
                <MenuSectionComponent />
                <AboutSectionComponent />
                <ServicesSectionComponent />
                <ProjectsSectionComponent />
                <ContactSectionComponent />

            </div>
            <footer className="footer">
                <h3 className="watermark">© 2020 GioDev</h3>
            </footer>
        </div>
   );
};