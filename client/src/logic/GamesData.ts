import car from "../assets/images/logos/car.svg";
import hand from "../assets/images/logos/hand.svg";
import medal from "../assets/images/logos/medal.svg";
import mobile from "../assets/images/logos/mobile.svg";

export interface GamesBlock {
  url: string;
  headline: string;
  text: string;
}

export const GamesObj: GamesBlock[] = [
  {
    url: car,
    headline: "Free Shopping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    url: hand,
    headline: "Exclusive Deals",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    url: medal,
    headline: "Quality Product",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    url: mobile,
    headline: "24/7 Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];
