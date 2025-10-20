import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Joystick from "./services/joystick/Joystick.tsx";
import Features from "./services/features/Features.tsx";
import Sidebar from "./services/sidebar/Sidebar.tsx";
import ModalWindow from "./services/modal-window/ModalWindow.tsx";
import Products from "./Products.tsx";
import Shopping from "./Shopping.tsx";
import About from "./services/about/About.tsx";
import Blog from "./services/blog/Blog.tsx";
import GamesOffer from "./services/games-offer/GamesOffer.tsx";
import Contact from "./Contact.tsx";
import Captcha from "./components/captcha/Captcha.tsx";
import BlogApp from "./BlogApp.tsx";
import { useState, useEffect } from "react";
import Pages from "./Pages.tsx";

const App = () => {
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [captchaPassed, setCaptchaPassed] = useState<boolean>(false);

  useEffect(() => {
    setShowCaptcha(true);
  }, []);

  const handleCaptchaClose = () => {
    setShowCaptcha(false);
    setCaptchaPassed(true);
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {showCaptcha && (
                <Captcha isVisible={showCaptcha} onClose={handleCaptchaClose} />
              )}
              {captchaPassed && <ModalWindow />}
              <Sidebar />
              <Joystick />
              <Features />
              <Blog />
              <GamesOffer />
              <About />
            </>
          }
        />

        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogApp />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
