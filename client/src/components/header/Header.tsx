import logo from "../../assets/images/gamerLogo.svg";
import badge from "../../assets/images/badge.svg";
import profile from "../../assets/images/profile.svg";
import trolley from "../../assets/images/trolley.svg";
import { Link } from "react-router-dom";
import "./header.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  function toggleMenu() {
    setBurgerMenu(!burgerMenu);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const menu = document.querySelector(".header__menu");
      if (menu && !menu.contains(event.target as Node)) {
        setBurgerMenu(false);
      }
    }

    if (burgerMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burgerMenu]);

  return (
    <header className="header">
      <div className="header__burger">
        <button
          onClick={toggleMenu}
          className={`header__burger-btn ${burgerMenu ? "active" : ""}`}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {burgerMenu && (
        <div className="header__menu header__menu--open container">
          <div className="header__logo">
            <img src={logo} alt="Gamer" className="header__logo-img" />
            <h1 className="header__logo-title">GAMERS</h1>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link to="/" className="header__nav-link">
                  Home
                </Link>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Pages
                </a>
              </li>
              <li className="header__nav-item">
                <Link to="/products" className="header__nav-link">
                  Products
                </Link>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Blog
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Shop
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__search">
            <input
              type="text"
              placeholder="🔎 Search..."
              className="header__search-input"
            />
          </div>

          <div className="header__icons">
            <a href="#" className="header__icon">
              <img src={badge} alt="badge" />
            </a>
            <a href="#" className="header__icon">
              <img src={profile} alt="profile" />
            </a>
            <a href="#" className="header__icon">
              <img src={trolley} alt="trolley" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
