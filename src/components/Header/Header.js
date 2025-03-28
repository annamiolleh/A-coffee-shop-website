import React from 'react';
import './header.scss';
import { Link } from 'react-scroll';
import logo from '../../img/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  handleMenuItemClick = () => {
    if (this.state.isMenuOpen) {
      this.toggleMenu();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isMenuOpen !== prevState.isMenuOpen) {
      if (this.state.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    return (
      <header className="header">
        <div className="header__container container-header">
          {/* <a href="#main" className="logo">
            <img src={logo} alt="Logo" />
          </a> */}
          <Link to="main" className="logo" onClick={this.handleMenuItemClick} smooth={true} duration={900}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className='header__button-wrap'>
            <button
              className={`header__button ${this.state.isMenuOpen ? 'active' : ''}`}
              onClick={this.toggleMenu}
            >
              <span></span>
            </button>
          </div>
          <nav className={`header__nav ${this.state.isMenuOpen ? 'open' : ''}`}>
            <ul className="header__list">
              <li className="header__elem">
                {/* <a href="#main" onClick={this.handleMenuItemClick}>
                  Home
                </a> */}
                <Link to="main" onClick={this.handleMenuItemClick} smooth={true} duration={900}>
                  Home
                </Link>
              </li>
              <li className="header__elem">
                {/* <a href="#select" onClick={this.handleMenuItemClick}>
                  Select
                </a> */}
                <Link to="select" onClick={this.handleMenuItemClick} smooth={true} duration={900}>
                  Select
                </Link>
              </li>
              <li className="header__elem">
                {/* <a href="#events" onClick={this.handleMenuItemClick}>
                  Events
                </a> */}
                <Link to="events" onClick={this.handleMenuItemClick} smooth={true} duration={900}>
                  Events
                </Link>
              </li>
              <li className="header__elem">
                <Link to="contacts" onClick={this.handleMenuItemClick} smooth={true} duration={900}>
                    Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;