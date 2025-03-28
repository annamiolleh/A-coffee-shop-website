import React from 'react';
import './footer.scss';
import { Link } from 'react-scroll';
import logo from '../../img/logo.svg';
import button from '../../img/buttonTop.png';

class Header extends React.Component {

    render() {
        return (
            <footer className='footer'>
                <div className='footer__container'>
                <Link to="main" className="logo logo-footer" smooth={true} duration={900}>
                    <img src={logo} alt="Logo" />
                </Link>
                <Link to="main" className='footer__button' smooth={true} duration={900}>
                    <img src={button} alt="Button to the top" />
                </Link>
                </div>
            </footer>

        )}}

export default Header;