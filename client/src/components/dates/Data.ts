import laptop from "../../assets/images/products/laptop.svg";
import headphone from "../../assets/images/products/HeadPhone.svg";
import motherBoard from "../../assets/images/products/motherBoard.svg";
import mouse from "../../assets/images/products/mouse.svg";
import ps5 from "../../assets/images/products/ps5.svg";
import oculusQuest from "../../assets/images/products/OculusQuest.svg";
import headsets from "../../assets/images/products/headsets.svg";
import controller from "../../assets/images/products/CONTROLLER.svg";
import box from "../../assets/images/products/Box.svg";
import keyboard from "../../assets/images/products/keyboard.svg";

interface ULprops {
  img: string;
  text: string;
}

const props: ULprops[] = [
  { img: laptop, text: "Laptops" },
  { img: headphone, text: "Head Phone" },
  { img: motherBoard, text: "Mother Board" },
  { img: mouse, text: "Mouse" },
  { img: ps5, text: "Play Station" },
  { img: oculusQuest, text: "Oculus Quest" },
  { img: headsets, text: "Headset" },
  { img: controller, text: "Controller" },
  { img: box, text: "Joystick" },
  { img: keyboard, text: "Keyboard" },
];

export { props };
