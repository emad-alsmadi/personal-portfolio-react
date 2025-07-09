import './navbar.css';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import contactImg from '../assets/contact.png';
import Contact from '../Contact/Contact';
import { Link } from 'react-scroll';
import { useState } from 'react';
const Navbar = ({ onShowContact }) => {

    const [durtion, onDurtion] = useState({ className: '' });
    const [isAction, setAction] = useState(false);
    const onClickLink = () => {
        setAction(!isAction);
    }
    return (
        <>
            <nav className="navbar container">
                <a href="#">
                    <img src={logo} alt="Logo" className='logo' />
                </a>
                <div className="menu">
                    <NavLink className={`${isAction ? 'durtion-link' : ''} menulistItem`} to="/">Home</NavLink>
                    <NavLink className={`${isAction ? 'durtion-link' : ''} menulistItem`} to="/skills" for="#skills">About</NavLink>
                    <NavLink className={`${isAction ? 'durtion-link' : ''} menulistItem`} to="/works" for="#works">Protfolio</NavLink>
                    <NavLink className={`${isAction ? 'durtion-link' : ''} menulistItem`} to="/contact" for="#contact">Clients</NavLink>
                </div>
                <button className="btn-menu" onClick={onShowContact}>
                    <img src={contactImg} alt="" className="menu-img" />Contact me
                </button>
            </nav>
        </>
    );
}
export default Navbar;