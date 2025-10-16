import { useRef } from "react";
import "./about.scss";
import logo from "../../assets/images/gamerLogo.svg";

const About: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const sendingToServer = async () => {
    const email = emailRef.current?.value.trim();

    if (!email) {
      alert("Please enter your email address!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000", {
        method: "POST2",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      alert("✅ Email successfully sent!");
      emailRef.current.value = "";
    } catch (err) {
      console.error("Error sending email:", err);
      alert("❌ Failed to send email. Check console for details.");
    }
  };

  return (
    <section className="about">
      <div className="about__subscribe">
        <article className="about__brand">
          <article className="logo__body__about">
            <img className="about__logo" src={logo} alt="Logo" />
            <h1 className="about__title">Gamers</h1>
          </article>
          <p className="about__description">
            Subscribe to email alerts. We promise not to spam your inbox.
          </p>
        </article>

        <article className="about__form">
          <input
            className="about__input"
            type="email"
            placeholder="Email Address*"
            ref={emailRef}
          />
          <button className="about__button" onClick={sendingToServer}>
            Subscribe
          </button>
        </article>
      </div>

      <div className="about__links">
        <ul className="about__list">
          <li className="about__item">
            <h3 className="about__heading">SHOP</h3>
            <p className="about__link">Laptops</p>
            <p className="about__link">Wireless Headphones</p>
            <p className="about__link">MotherBoards</p>
            <p className="about__link">Controllers</p>
            <p className="about__link">Wireless Headsets</p>
            <p className="about__link">Jot Sticks</p>
            <p className="about__link">PlayStations</p>
            <p className="about__link">Gaming Mouse</p>
            <p className="about__link">Oculus Quest</p>
            <p className="about__link">Gift Card</p>
            <p className="about__link">Rock In India</p>
            <p className="about__link">Earn Rs.100</p>
          </li>

          <li className="about__item">
            <h3 className="about__heading">HELP</h3>
            <p className="about__link">Track Your Order</p>
            <p className="about__link">Warranty & Support</p>
            <p className="about__link">Return Policy</p>
            <p className="about__link">Service Centers</p>
            <p className="about__link">Bulk Orders</p>
            <p className="about__link">FAQs</p>
            <p className="about__link">Why Buy Direct</p>
          </li>

          <li className="about__item">
            <h3 className="about__heading">ABOUT</h3>
            <p className="about__link">About Us</p>
            <p className="about__link">News</p>
            <p className="about__link">Read Our Blog</p>
            <p className="about__link">High5heads</p>
            <p className="about__link">Our Partners</p>
            <p className="about__link">Terms of Service</p>
            <p className="about__link">Private Policy</p>
            <p className="about__link">Partner Offers T&Cs</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
