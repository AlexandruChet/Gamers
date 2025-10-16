import newHeadphones from "../../assets/images/latest/newHeadphones.svg";
import laptop from "../../assets/images/products/laptop.svg";

interface LatestBlog {
  url: string;
  date: string;
  headline: string;
  text: string;
  btn: string;
}

export const latest: LatestBlog[] = [
  {
    url: newHeadphones,
    date: "21 January,2022",
    headline: "Top essential Trends in 2022",
    text: "NO STRINGS WITH THESE WIRELESS HEADPHONE",
    btn: "Read More",
  },
  {
    url: laptop,
    date: "31 January,2022",
    headline: "Top essential trends in 2022",
    text: "Laptop Buying Guide - Everything You Need To Know",
    btn: "Read More",
  },
  {
    url: newHeadphones,
    date: "21 February,2022",
    headline: "Top essential Trends in 2022",
    text: "5 Reason To Switch To A pair of wireless Headphone",
    btn: "Read More",
  },
];
