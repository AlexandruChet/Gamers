import "./Joystick.scss";
import JoystickImg from "../../assets/images/goods/joystick.svg";
import Button from "./button/Button";

const Joystick = () => {
  return (
    <section className="joystick">
      <div className="joystick__info">
        <h1 className="joystick__title">PS4 V2 DualShock 4</h1>
        <h3 className="joystick__subtitle">Wireless controller for PlayStation 4</h3>
        <p className="joystick__description">compatibilityCentric</p>
        <h3 className="joystick__price">₹2999</h3>
        <Button />
      </div>
      <div className="joystick__image-container">
        <h3 className="percent">50%</h3>
        <img className="joystick__image" src={JoystickImg} alt="goods" />
      </div>
    </section>
  );
};

export default Joystick;
