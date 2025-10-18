import {
  productAbout,
  textContainer,
} from "../../components/dates/ProductData";
import { useState } from "react";
import "./Product.scss";

interface ListProps {
  headline: string;
  text: string;
}

const List: React.FC<ListProps> = ({ headline, text }) => {
  return (
    <li className="gaming-product__info-item">
      <div className="gaming-product__info-content">
        <h3 className="gaming-product__info-headline">{headline}</h3>
        <p className="gaming-product__info-text">{text}</p>
      </div>
    </li>
  );
};

interface AboutBlockProps {
  url: string;
  text: string;
  isVisible: boolean;
  onToggle: () => void;
}

const AboutBlock: React.FC<AboutBlockProps> = ({
  url,
  text,
  onToggle,
  isVisible,
}) => {
  return (
    <div className="gaming-product__card">
      <button
        className={`gaming-product__card-button ${
          isVisible ? "gaming-product__card-button--active" : ""
        }`}
        onClick={onToggle}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <div
          className={`gaming-product__card-content ${
            isVisible ? "gaming-product__card-content--active" : ""
          }`}
        >
          <img className="gaming-product__card-img" src={url} alt="IMG" />
          <h3 className="gaming-product__card-text">{text}</h3>
        </div>
      )}
    </div>
  );
};

const Product: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="gaming-product">
      <div className="gaming-product__info">
        <ul className="gaming-product__info-list">
          {productAbout.map((item, index) => (
            <List key={index} {...item} />
          ))}
        </ul>
      </div>

      <div className="gaming-product__cards">
        {textContainer.map((item, index) => (
          <AboutBlock
            key={index}
            {...item}
            isVisible={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
