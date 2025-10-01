import "./footer.scss";
import { useState } from "react";
import twitter from "../../assets/images/social-networks/twitter.svg";
import facebook from "../../assets/images/social-networks/facebook-logo.svg";
import youtube from "../../assets/images/social-networks/youtube.svg";
import instagram from "../../assets/images/social-networks/instagram.svg";
import linkedin from "../../assets/images/social-networks/linkedin.svg";
import cards from "../../assets/images/cards.svg";
import googlePlay from "../../assets/images/googlePlay.svg";
import appStore from "../../assets/images/appStore.svg";

const Footer = () => {
  const [footerState, setFooterState] = useState<boolean>(false);

  const toggleFooter = () => setFooterState(!footerState);

  return (
    <footer className="footer">
      <div className="footer__logo">
        <button
          onClick={toggleFooter}
          className={`footer__toggle-btn ${
            footerState ? "footer__toggle-btn--active" : ""
          }`
        }
         aria-label={footerState ? "Close footer" : "Open footer"}
        >
          ▼
        </button>

        {footerState && (
          <div className="footer__content">
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>

            <div className="footer__main">
              <div className="footer__cards">
                <img src={cards} alt="bank cards Visa" />
              </div>

              <div className="footer__download">
                <h2 className="footer__download-title">DOWNLOAD THE APP</h2>
                <img src={googlePlay} alt="google play" />
                <img src={appStore} alt="app store" />
              </div>
            </div>

            <div className="footer__bottom">
              © 2022 Imagine Marketing Private Limited. All Rights Reserved.
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
export default Footer;
