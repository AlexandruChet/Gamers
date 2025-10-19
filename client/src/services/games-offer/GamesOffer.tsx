import { GamesObj } from "../../logic/GamesData";
import "./Games.scss";

interface CardProps {
  url: string;
  headline: string;
  text: string;
}

const GamesOfferCard: React.FC<CardProps> = ({ url, headline, text }) => {
  return (
    <div className="games-card fade-in">
      <div className="games-card__icon">
        <img src={url} alt={headline} loading="lazy" />
      </div>
      <div className="games-card__info">
        <h3>{headline}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const GamesOffer: React.FC = () => {
  return (
    <section className="games">
      <div className="games__header">
        <h2>Why Choose Our Games?</h2>
        <p>Discover the benefits that make our platform stand out.</p>
      </div>

      <div className="games__grid">
        {GamesObj.map((item, index) => (
          <GamesOfferCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default GamesOffer;
