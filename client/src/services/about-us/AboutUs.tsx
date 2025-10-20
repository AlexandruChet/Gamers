import React, { useState, useRef } from "react";
import { customHookValidation, customHookSending } from "../../logic/customHooks";
import AboutUs from "../../assets/images/aboutUs.svg";
import "./AboutUS.scss";

const AboutUS: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const changeTheme = () => setTheme((prev) => !prev);

  function validation(): boolean {
    const email = emailRef.current?.value.trim() || "";
    const password = passwordRef.current?.value.trim() || "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Email cannot be empty");
      return false;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return false;
    }

    return customHookValidation(password);
  }

  async function sendingToServerPost(e: React.FormEvent) {
    e.preventDefault();

    if (!validation()) return;

    const password = passwordRef.current?.value.trim() || "";

    try {
      const result = await customHookSending(3000, password);
      if (result?.success) {
        alert(result.message || "Password sent to server successfully!");
        formRef.current?.reset();
      } else {
        alert(result?.message || "Error while sending data to server.");
      }
    } catch (err) {
      console.error(err);
      alert("Unexpected error while sending data.");
    }
  }

  return (
    <div className={`about-us ${theme ? "dark-theme" : "light-theme"}`}>
      <button className="change-new-theme" onClick={changeTheme}>
        {theme ? "🌙 Dark Theme" : "☀️ Light Theme"}
      </button>

      <div className="about-us__info">
        <div className="about-us__info-text">
          <h3 className="about-us__title">Information About Us</h3>
          <p className="about-us__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est.
          </p>
        </div>

        <div className="about-us__contacts">
          <h3 className="about-us__title">Contact Way</h3>
          <ul className="about-us__list">
            <li className="about-us__item">
              <div className="about-us__icon" />
              <div className="about-us__item-info">
                <p>Tel: 6261898153</p>
                <p>E-Mail: gamers@store.com</p>
              </div>
            </li>

            <li className="about-us__item">
              <div className="about-us__icon" />
              <div className="about-us__item-info">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </li>

            <li className="about-us__item">
              <div className="about-us__icon" />
              <div className="about-us__item-info">
                <p>Mumbai, India</p>
                <p>Bangalore</p>
              </div>
            </li>

            <li className="about-us__item">
              <div className="about-us__icon" />
              <div className="about-us__item-info">
                <p>Free standard shipping</p>
                <p>on all orders.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-us__touch">
        <div className="about-us__touch-text">
          <h3 className="about-us__title">Get In Touch</h3>
          <p className="about-us__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor.
          </p>
        </div>

        <div className="about-us__touch-content">
          <form className="about-us__form" ref={formRef} onSubmit={sendingToServerPost}>
            <div className="about-us__form-row">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Email" ref={emailRef} />
            </div>

            <div className="about-us__form-group">
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
              <textarea placeholder="Type Your Message"></textarea>
            </div>

            <button type="submit" className="about-us__button">
              Submit
            </button>
          </form>

          <div className="about-us__image">
            <img src={AboutUs} alt="about us img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
