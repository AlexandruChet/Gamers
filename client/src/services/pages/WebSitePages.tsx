import React from "react";
import { Link } from "react-router-dom";
import "./Pages.scss";

interface PropsPages {
  FirstLink: string;
  SecLink: string;
  ThirdLink: string;
  FourthLink: string;
  FifthLink: string;
  SixthLink: string;
}

const WebSitePages: React.FC<PropsPages> = ({
  FirstLink,
  SecLink,
  ThirdLink,
  FourthLink,
  FifthLink,
  SixthLink,
}) => {
  return (
    <section className="website-pages">
      <nav className="nav__pages">
        <ul className="nav__list__pages">
          <li className="nav__item__pages">
            <Link to="/" className="nav__link__pages">
              {FirstLink}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/pages" className="nav__link__pages">
              {SecLink}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/products" className="nav__link__pages">
              {ThirdLink}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link__pages">
              {FourthLink}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/shop" className="nav__link__pages">
              {FifthLink}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="nav__link__pages">
              {SixthLink}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default WebSitePages;
