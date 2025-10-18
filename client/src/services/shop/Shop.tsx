import { useState } from "react";
import { ShopObj } from "../../components/dates/ShopData";
import Auth from "../auth/Auth";
import "./Shop.scss";

interface ShopInterface {
  url: string;
  headline: string;
  paragraph: string;
  cost: number;
}

const ShopItem: React.FC<ShopInterface> = ({
  url,
  headline,
  paragraph,
  cost,
}) => {
  return (
    <div className="shop__item">
      <img className="shop__item-img" src={url} alt={headline} />
      <div className="shop__item-info">
        <h3 className="shop__item-headline">{headline}</h3>
        <p className="shop__item-paragraph">{paragraph}</p>
      </div>
      <p className="shop__item-cost">{cost.toLocaleString()}₴</p>
    </div>
  );
};

const Shop: React.FC = () => {
  const [showAuth, setShowAuth] = useState<boolean>(false);

  return (
    <section className="shop">
      <div className="shop__header">
        <h3>Shopping</h3>
        <p>Cart / Information / Shipping</p>
      </div>

      <div className="shop__body">
        <div className="shop__user-info">
          <div className="shop__account">
            <h3>Already have an account?</h3>
            <button onClick={() => setShowAuth(true)} className="btn-onclick">
              LogIn →
            </button>
            <Auth isVisible={showAuth} onClose={() => setShowAuth(false)} />
          </div>

          <div className="shop__contact">
            <h3>Contact Information</h3>
            <h4>Email or mobile phone number</h4>
            <p>☑ Keep me up to date on news and exclusive offers</p>
          </div>
        </div>

        <div className="shop__address">
          <h3>Shopping Address</h3>
          <form className="shop__form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <button type="submit">Continue Shopping</button>
          </form>
        </div>

        <div className="shop__items">
          {ShopObj.map((item, index) => (
            <ShopItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
