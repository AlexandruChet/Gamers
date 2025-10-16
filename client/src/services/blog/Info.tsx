import React from "react";
import "./Info.scss";

export type InfoProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Info: React.FC<InfoProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <section className="info">
      <div className="info__overlay" onClick={onClose}></div>
      <div className="info__content">
        <button className="info__close" onClick={onClose}>
          ✖️
        </button>
        <h2 className="info__title">More Information</h2>
        <p className="info__text">
          these are the latest gadgets but unfortunately this is a small site
          where you can't buy anything
        </p>
      </div>
    </section>
  );
};

export default Info;
