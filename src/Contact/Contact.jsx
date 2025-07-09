import './contact.css';
import Walmart from '../assets/walmart.png';
import Facebook from '../assets/facebook.png';
import Microsoft from '../assets/microsoft.png';
import Adobe from '../assets/adobe.png';
import FacebookIcon from '../assets/facebook-icon.png';
import TwitterIcon from '../assets/twitter.png';
import YoutubeIcon from '../assets/youtube.png';
import InstagramIcon from '../assets/instagram.png';
import { useRef } from 'react';
const Contact = ()=>{
    const contact =useRef();
    return(
    
        <section className='section-contact'>
            <div className="clients">
                <h1>My clients Me</h1>
                <p className='desc-clients'>I have had the opportunity to work with a diverse group of compaies
                    some of the notable compaies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
                </div>
            </div>
            <div ref={contact} className="contact">
                <h1>Contact Me</h1>
                <p className='desc-contact'>Please fill out the form below to discuss any work opportunities</p>
                <form action="" className='cotact-form'>
                    <input type="text" className='name' placeholder='Your Name'/>
                    <input type="email" className="email" placeholder='your Email' />
                    <textarea name="message" className='message' rows={5} placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="" className="link" />
                        <img src={InstagramIcon} alt="" className="link" />
                        <img src={YoutubeIcon} alt="" className="link" />
                        <img src={TwitterIcon} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;