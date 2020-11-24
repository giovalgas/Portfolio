import './css/app.css'
import React from 'react'
import { NavComponent } from './components/NavComponent';
import { CardComponent } from './components/CardComponent';
import { ProjectComponent } from './components/ProjectComponent';

export const App: React.FC = () => {
    return (
        <div className="App">
            <NavComponent />
            <div className="content">
                <section className="menu"> 
                    <div className="menu-holder">
                        <div className="name-section">
                            <h1 className="name">Giovani Valgas</h1>
                            <div className="icon-holder">    
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-square" className="socials-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="socials-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="socials-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
                            </div>
                        </div>
                        <div className="scroll-down">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" className="arrow-down-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
                        </div>
                    </div>
                </section>

                <section className="about-me section-content">
                    <div className="about-me-holder">
                        <h1 className="about-me-heading">About me</h1>
                        <CardComponent width={768} height={512} id="about-me">
                            <p className="about-me-text">
                                Hello there, <br /> 
                                <br />
                                My name is Giovani Valgas. I'm a 16 year old
                                Brazilian High Schooler, ever since I had 13 
                                years of age I study software development 
                                on the internet.
                            </p>
                            <div className="about-me-button-holder">
                                <button className="about-me-button btn">View Projects</button>    
                                <button className="about-me-button btn">Contact me</button>
                            </div>
                        </CardComponent>
                    </div> 
                </section>

                <section className="services section-content">
                    <h1 className="services-heading">Services</h1>
                    <div className="service-card-holder">
                        <CardComponent id="service" width={256} height={576}>
                        <p className="service-text">
                            <b>Minecraft Plugin Development</b>
                            <br/> 
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui sed lacus porta ornare in quis urna. Vestibulum luctus, ipsum at cursus scelerisque, neque orci aliquet nisl, a dictum elit dui non dictumst.
                        </p>
                        </CardComponent>
                        <CardComponent id="service" width={256} height={576}>
                        <p className="service-text">
                            <b>Web <br />Development</b>
                            <br/>
                            <br/> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui sed lacus porta ornare in quis urna. Vestibulum luctus, ipsum at cursus scelerisque, neque orci aliquet nisl, a dictum elit dui non dictumst.
                        </p> 
                        </CardComponent>
                        <CardComponent id="service" width={256} height={576}>
                        <p className="service-text">
                            <b>Discord Bot Development</b>
                            <br/> 
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui sed lacus porta ornare in quis urna. Vestibulum luctus, ipsum at cursus scelerisque, neque orci aliquet nisl, a dictum elit dui non dictumst.
                        </p>
                        </CardComponent>
                    </div>
                    {/* eslint-disable-next-line */}
                    <h2 className="contact-me-heading">Interested in any of these?  <a href="#" className="anchor">Contact me!</a></h2>
                </section>
                <section className="projects section-content"> 
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
                    </div>
                </section>

                <section className="contact-me section-content">
                    <div className="contact-holder">
                        <h2 className="contact-heading">Contact me</h2>
                        <form action="mailto:giovalgascom@gmail.com" method="post" className="form-contact">
                            <div>
                                <input type="text" name="fname" placeholder="Your Name" className="form-input fname"/>
                                <input type="text" name="femail" placeholder="Email" className="form-input femail"/>
                            </div>
                            <input type="text" name="fsubject" placeholder="Subject" className="form-input fsubject"/>
                            <br/>
                            <textarea name="fmessage" placeholder="Message" className="form-input fmessage"/>
                        </form>

                        <button className="submit-button">Submit</button>
                    </div>
                </section>
            </div>
            <footer className="footer">
                <h3 className="watermark">© 2020 GioDev</h3>
            </footer>
        </div>
   );
};