import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Joystick from "./services/joystick/Joystick.tsx";

const App = () => {
  return (
    <>
      <Header />
      <Joystick />
      <Footer />
    </>
  );
};
export default App;
