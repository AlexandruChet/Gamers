import React, { useState } from "react";
import headphone from "../../assets/images/products/HeadPhone.svg";
import logo from "../../assets/images/gamerLogo.svg";
import "./PropsAbout.scss";

interface PropsText {
  title: string;
  headline: string;
  description: string;
  event: () => void;
  text: string;
  url: string;
}

const PropsDOM: React.FC<PropsText> = ({
  title,
  headline,
  description,
  event,
  text,
  url,
}) => {
  return (
    <div className="glxProductMagic_1">
      <h1 className="neonPulseText_777">{title}</h1>
      <h3 className="techShadowHeadline_404">{headline}</h3>
      <p className="metaDescZone_2025">{description}</p>

      <button className="hyperTechButton_9" onClick={event}>
        Show More
      </button>

      <div className="hyperTechFrame_2025">
        <h3 className="glowInfoText_666">{text}</h3>
        <img className="ultraPixelImage_808" src={url} alt="product" />
      </div>
    </div>
  );
};

const PropsAbout: React.FC = () => {
  const [state, setState] = useState<boolean>(false);

  const handleShowMore = () => {
    setState(!state);
  };

  return (
    <section className="cyberProductsZone_999">
      <div className="warpContainer_404">
        <PropsDOM
          title="GamerTech Pro Series"
          headline="Incredible power for true cyber gladiators"
          description="Feel the energy of new gaming accessories: RGB-backlit keyboards, wireless headsets and ultra-precise mice with the latest generation sensors."
          event={handleShowMore}
          text="Immerse yourself in the world of games with maximum comfort, responsiveness and GamerTech's signature style."
          url={logo}
        />
      </div>

      {state && (
        <div className="ultraDisplay_303">
          <img
            className="cyberImage_101"
            src={headphone}
            alt="Gaming Headset"
          />
          <h3 className="holoText_222">
            🎧 The HyperZone X headset is a sound that captivates from the first
            seconds. Lightweight, comfortable and designed for long gaming
            sessions.
          </h3>
        </div>
      )}
    </section>
  );
};

export default PropsAbout;
