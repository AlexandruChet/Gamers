import { useModal } from "../../ui/useModal";
import "./modal.scss";

const ModalWindow = () => {
  const { isVisible, isClosing, modalRef, closeModal } = useModal();

  if (!isVisible) return null;

  return (
    <div className={`custom-modal-overlay ${isClosing ? "closing" : ""}`}>
      <div
        className={`custom-modal ${isClosing ? "closing" : ""}`}
        ref={modalRef}
      >
        <h3 className="custom-modal__headline">
          This is a small website made by one person, so it won't have some of
          the functionality of large projects and it's purely visual without any
          real possibility to buy anything.
        </h3>
        <button className="custom-modal__close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
