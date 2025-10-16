import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Joystick from "./services/joystick/Joystick.tsx";
import Features from "./services/features/Features.tsx";
import Sidebar from "./services/sidebar/Sidebar.tsx";
import ModalWindow from "./services/modal-window/ModalWindow.tsx";
import Products from "./Products.tsx";
import About from "./services/about/About.tsx";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ModalWindow />
              <Sidebar />
              <Joystick />
              <Features />
              <About/>
            </>
          }
        />

        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
