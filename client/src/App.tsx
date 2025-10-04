import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Joystick from "./services/joystick/Joystick.tsx";
import Features from "./services/features/Features.tsx"

const App = () => {
  return (
    <>
      <Header />
      <Joystick />
      <Features/>
      <Footer />
    </>
  );
};
export default App;
