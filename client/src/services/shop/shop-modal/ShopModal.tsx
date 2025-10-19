import { useEffect } from "react";
import laptop from "../../../assets/images/products/laptop.svg";
import keyboard from "../../../assets/images/products/keyboard.svg";
import headphone from "../../../assets/images/products/headsets.svg";
import joystick from "../../../assets/images/products/Box.svg";
import "./ShopModal.scss";

type StateProps = {
  isVisible: boolean;
  closeModal: () => void;
};

const ShopModal: React.FC<StateProps> = ({ isVisible, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  if (!isVisible) return null;

  return (
    <div className="modal-shop fade-in">
      <div className="modal-content slide-up">
        <button className="modal-close" onClick={closeModal}>
          ✕
        </button>

        <div className="modal-header">
          <img src={laptop} alt="Shop logo" className="modal-logo spin-in" />
          <h2>Welcome to Our Store!</h2>
          <p className="modal-subtitle">
            Thank you for checking out this portfolio project 💫
          </p>
        </div>

        <div className="modal-body">
          <p>
            This section demonstrates how a real e-commerce checkout modal might
            look. However, since this is a portfolio website — you can’t
            actually buy anything here 😅
          </p>

          <div className="modal-gallery">
            <img
              src={keyboard}
              alt="Demo item 1"
              className="gallery-item zoom-in"
            />
            <img
              src={headphone}
              alt="Demo item 2"
              className="gallery-item zoom-in delay-1"
            />
            <img
              src={joystick}
              alt="Demo item 3"
              className="gallery-item zoom-in delay-2"
            />
          </div>

          <div className="modal-info">
            <h3>What’s inside this demo?</h3>
            <ul>
              <li>🛒 Product layout with images & price display</li>
              <li>🎨 Responsive SCSS styling</li>
              <li>⚡ Smooth open/close animations</li>
              <li>⌨️ ESC key to close the modal</li>
            </ul>
          </div>

          <div className="modal-footer">
            <button className="btn-primary" onClick={closeModal}>
              Got it!
            </button>
            <button
              className="btn-secondary"
              onClick={() =>
                window.open(
                  "https://github.com/AlexandruChet",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              View Source →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
