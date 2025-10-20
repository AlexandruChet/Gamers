import laptop from "../../assets/images/products/laptop.svg";
import headphone from "../../assets/images/products/HeadPhone.svg";
import motherBoard from "../../assets/images/products/motherBoard.svg";
import mouse from "../../assets/images/products/mouse.svg";
import ps5 from "../../assets/images/products/ps5.svg";
import oculusQuest from "../../assets/images/products/OculusQuest.svg";
import headsets from "../../assets/images/products/headsets.svg";
import controller from "../../assets/images/products/CONTROLLER.svg";
import joystick from "../../assets/images/products/Box.svg";
import keyboard from "../../assets/images/products/keyboard.svg";

interface PropsCards {
  url: string;
  title: string;
  text: string;
}

export const CardsObj: PropsCards[] = [
  {
    url: laptop,
    title: "Gaming Laptop",
    text: "High-performance laptop for gaming and streaming.",
  },
  {
    url: headphone,
    title: "Gaming Headphones",
    text: "Immersive sound with noise cancellation for gamers.",
  },
  {
    url: motherBoard,
    title: "Motherboard",
    text: "Durable motherboard with advanced cooling system.",
  },
  {
    url: mouse,
    title: "Gaming Mouse",
    text: "Ergonomic mouse with customizable DPI settings.",
  },
  {
    url: ps5,
    title: "PlayStation 5",
    text: "Next-gen console with ultra-fast loading times.",
  },
  {
    url: oculusQuest,
    title: "Oculus Quest",
    text: "Standalone VR headset for an immersive experience.",
  },
  {
    url: headsets,
    title: "Headsets",
    text: "Comfortable headsets for long gaming sessions.",
  },
  {
    url: controller,
    title: "Game Controller",
    text: "Responsive controller for console and PC games.",
  },
  {
    url: joystick,
    title: "Joystick",
    text: "Precision joystick for flight simulators and racing games.",
  },
  {
    url: keyboard,
    title: "Mechanical Keyboard",
    text: "RGB keyboard with tactile mechanical switches.",
  },
];
