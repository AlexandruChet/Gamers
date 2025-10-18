interface textAbout {
  headline: string;
  text: string;
}

export const productAbout: textAbout[] = [
  {
    headline: "Gaming Laptops",
    text: "Laptops for true gamers with powerful RTX graphics cards, fast DDR5 memory and 240 Hz screens for maximum smoothness of the game.",
  },
  {
    headline: "Mechanical Keyboards",
    text: "Keyboards with RGB backlight, instant response and Cherry MX or Razer Optical switches are the choice of professional esports athletes.",
  },
  {
    headline: "Gaming Mice",
    text: "High-precision sensors, adjustable weight and programmable buttons - everything to make your reaction faster than lightning.",
  },
  {
    headline: "Monitors for gamers",
    text: "Monitors with a refresh rate of 165-360 Hz, low latency and G-Sync/FreeSync support are ideal for FPS, Language and shooters.",
  },
  {
    headline: "Gaming Headsets",
    text: "Immersive 7.1 sound, noise cancellation and comfort for long sessions - hear the enemy before they see you.",
  },
];

interface blockText {
  url: string;
  text: string;
}

export const textContainer: blockText[] = [
  {
    url: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80",
    text: "Gaming laptops with powerful Intel i9 and AMD Ryzen 9 processors - for those who want to play without limits.",
  },
  {
    url: "https://www.cherry.de/fileadmin/_processed_/0/3/csm_Category_mechanical-keyboards_ba5084c0a5.jpg",
    text: "Mechanical keyboards with customized RGB lighting - make your setup unique.",
  },
  {
    url: "https://www.cherry.de/fileadmin/_processed_/8/6/csm_Category_gaming-mice_f5698864cf.jpg",
    text: "Gaming mice with up to 26,000 DPI, wireless technology and ergonomic design - maximum control in every movement.",
  },
  {
    url: "https://www.techguide.com.au/wp-content/uploads/2019/12/SamsungMonitorSP3.jpeg",
    text: "Ultra-fast monitors with minimal input lag and HDR support - immerse yourself in the world of the game with realistic graphics.",
  },
  {
    url: "https://dlcdnwebimgs.asus.com/gain/FBAAC5C2-2ED4-406C-AA47-5A105797004A/w750/h470/fwebp",
    text: "Headsets with crystal-clear sound and a microphone that picks up every whisper without noise.",
  },
];
