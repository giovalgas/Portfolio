import './layout/contact-section.css'
import React from 'react'
import emailjs from 'emailjs-com'

function sendEmail(e: Event){
    e.preventDefault();

    emailjs.sendForm('service_f0isnyh', 'template_qh5y8a6', e.target as HTMLFormElement, 'user_Vjr9Ex2cBwKbtLzlvG5ns').then((result) => {

    console.log(result.text);

    }, (error) => {
    console.log(error.text);
    });
    
    let target = e.target as HTMLFormElement;
    target.reset()
}

export const ContactSectionComponent: React.FC = () => {
    return (
        <section className="contact-me section-content">
            <h2 className="contact-heading">Contact me</h2>
            <form method="post" className="form-contact" onSubmit={sendEmail as any}>
                <div className="fl-div">
                    <input type="text" name="fname" placeholder="Your Name" className="form-input fname fl-input"/>
                    <input type="text" name="femail" placeholder="Email" className="form-input femail fl-input"/>
                </div>
                <input type="text" name="fsubject" placeholder="Subject" className="form-input fsubject"/>
                <br/>
                <textarea name="fmessage" placeholder="Message" className="form-input fmessage"/>
                <div className="fbutton-holder">
                    <input type="submit" className="submit-button" value="Submit" />
                </div>
            </form>
        </section>
    )
}