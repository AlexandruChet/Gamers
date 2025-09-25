import { useState } from "react";
import "../../styles/Header.scss";

const BurgerMenu = () => {
  const [state, setState] = useState(false);

  const funcSetState = () => {
    setState(!state);
  };

  return (
    <div>
      <button
        className={`header__btn ${state ? "active" : ""}`}
        onClick={funcSetState}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`burger__menus ${state ? "active" : ""}`}>
        <div className="services__names">
          <ul>
            <li><a href="#">lorem1</a></li>
            <li><a href="#">lorem2</a></li>
            <li><a href="#">lorem3</a></li>
            <li><a href="#">lorem4</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
