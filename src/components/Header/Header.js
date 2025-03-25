import React from 'react';
import './header.scss';
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
          <a href="#main" className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <button
            className={`header__button ${this.state.isMenuOpen ? 'active' : ''}`}
            onClick={this.toggleMenu}
          >
            <span></span>
          </button>
          <nav className={`header__nav ${this.state.isMenuOpen ? 'open' : ''}`}>
            <ul className="header__list">
              <li className="header__elem">
                <a href="#main" onClick={this.handleMenuItemClick}>
                  Home
                </a>
              </li>
              <li className="header__elem">
                <a href="#select" onClick={this.handleMenuItemClick}>
                  Select
                </a>
              </li>
              <li className="header__elem">
                <a href="#events" onClick={this.handleMenuItemClick}>
                  Events
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;