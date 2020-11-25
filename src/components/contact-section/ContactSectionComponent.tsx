import './layout/contact-section.css'
import React from 'react'

export const ContactSectionComponent: React.FC = () => {
    return (
        <section className="contact-me section-content">
            <h2 className="contact-heading">Contact me</h2>
            <form action="mailto:giovalgascom@gmail.com" method="post" className="form-contact">
                <div className="fl-div">
                    <input type="text" name="fname" placeholder="Your Name" className="form-input fname fl-input"/>
                    <input type="text" name="femail" placeholder="Email" className="form-input femail fl-input"/>
                </div>
                <input type="text" name="fsubject" placeholder="Subject" className="form-input fsubject"/>
                <br/>
                <textarea name="fmessage" placeholder="Message" className="form-input fmessage"/>
            </form>
            <button className="submit-button">Submit</button>
        </section>
    )
}