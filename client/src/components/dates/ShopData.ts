import Lenovo from "../../assets/images/products/LenovoLegion5Ryzen.svg";
import HeadPhone from "../../assets/images/products/HeadPhone.svg";
import GamingMouse from "../../assets/images/products/mouse.svg";
import PS from "../../assets/images/products/ps5.svg";
import JoyStick from "../../assets/images/products/Box.svg";

interface ShopInterface {
  url: string;
  headline: string;
  paragraph: string;
  cost: number;
}

export const ShopObj: ShopInterface[] = [
  {
    url: Lenovo,
    headline: "Lenovo Legion 9 Pro",
    paragraph: "Color Black",
    cost: 1_79_990,
  },

  {
    url: HeadPhone,
    headline: "HeadPhone",
    paragraph: "Color Red",
    cost: 2_999,
  },

  {
    url: GamingMouse,
    headline: "GamingMouse",
    paragraph: "Color Black",
    cost: 1_999,
  },

  {
    url: PS,
    headline: "PS",
    paragraph: "Color White",
    cost: 2_999,
  },

  {
    url: JoyStick,
    headline: "JoyStick",
    paragraph: "Color Black",
    cost: 4_999,
  },
];
