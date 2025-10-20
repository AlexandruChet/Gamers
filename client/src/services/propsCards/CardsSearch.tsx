import React, { useState } from "react";
import { CardsObj } from "../../components/dates/CardsData";
import ShopModal from "../shop/shop-modal/ShopModal";
import "./CardSearch.scss";

interface Props {
  url: string;
  title: string;
  text: string;
  openModal?: () => void;
}

const PropsGenerate: React.FC<Props> = ({ url, title, text, openModal }) => {
  return (
    <div className="card">
      <img src={url} alt={title} className="card__img" />
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <button onClick={openModal}>Buy</button>
    </div>
  );
};

const CardSearch: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Props | null>(null);
  const [search, setSearch] = useState("");

  const filteredCards = CardsObj.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="card-search">
      <div className="card-search__controls">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="card-search__input"
        />
      </div>

      {selectedCard && (
        <ShopModal
          isVisible={true}
          closeModal={() => setSelectedCard(null)}
          card={selectedCard}
        />
      )}

      <div className="card-search__list">
        {filteredCards.map((item, index) => (
          <PropsGenerate
            key={index}
            {...item}
            openModal={() => setSelectedCard(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSearch;
