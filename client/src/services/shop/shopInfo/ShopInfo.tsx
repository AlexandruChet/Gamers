import React, { useState } from "react";
import ShopModal from "../shop-modal/ShopModal";
import keyboard from "../../../assets/images/products/keyboard.svg";
import headset from "../../../assets/images/products/headsets.svg";
import mouse from "../../../assets/images/products/mouse.svg";
import "./ShopInfo.scss";

interface PropsCardInfo {
  url: string;
  headline: string;
}

const CardInfo: React.FC<PropsCardInfo> = ({ url, headline }) => {
  return (
    <div className="gshop__card">
      <img className="gshop__card-img" src={url} alt="gamer-product" />
      <h3 className="gshop__card-headline">{headline}</h3>
    </div>
  );
};

const ObjInfoShop: readonly PropsCardInfo[] = [
  { url: keyboard, headline: "RGB Gaming Keyboard" },
  { url: headset, headline: "Pro-Level Headset" },
  {
    url: "https://images.secretlab.co/theme/common/features-on-stage-standard-home-splash-poster-mb.jpg",
    headline: "Ergonomic Gaming Chair",
  },
  { url: mouse, headline: "Precision Gaming Mouse" },
] as const;

const ShopInfo: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpenModal = (): void => setShowModal(true);
  const handleCloseModal = (): void => setShowModal(false);

  return (
    <section className="gshop__section">
      <div className="gshop__header">
        <h1 className="gshop__title">Elite Gamer Gear</h1>
        <h3 className="gshop__subtitle">Dominate Every Battle</h3>
        <p className="gshop__description">
          Explore premium gaming equipment built for speed, comfort, and
          victory. Every product is crafted for those who play to win.
        </p>
        <button className="gshop__btn" onClick={handleOpenModal}>
          View More
        </button>

        <ShopModal isVisible={showModal} closeModal={handleCloseModal} />
      </div>

      <div className="gshop__content">
        <div className="gshop__intro">
          <div className="gshop__intro-text">
            <h3 className="gshop__intro-title">About GamerZone</h3>
            <p className="gshop__intro-desc">
              GamerZone is your ultimate hub for top-tier gaming gear — from
              high-performance peripherals to next-gen accessories. Designed by
              gamers, for gamers.
            </p>
          </div>
        </div>

        <div className="gshop__cards">
          {ObjInfoShop.map((item, index) => (
            <CardInfo key={index} url={item.url} headline={item.headline} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
