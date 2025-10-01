import "./Joystick.scss";
import JoystickImg from "../../assets/images/goods/joystick.svg";
import Button from "./button/Button";

const Joystick = () => {
  return (
    <section>
      <div>
        <h1>PS4 V2 DualShock 4</h1>
        <h3>wireless controller for PlayStation 4</h3>
        <p>compatibilityCentric</p>
        <h3>₹2999</h3>
        <Button />
      </div>
      <div>
        <img src={JoystickImg} alt="goods" />
      </div>
    </section>
  );
};

export default Joystick;
