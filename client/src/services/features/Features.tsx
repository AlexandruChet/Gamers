import { props } from "../../components/dates/Data";
import { useState } from "react";
import "./features.scss";

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === props.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSlide = props[currentIndex];

  return (
    <section className="features">
      <div className="features-div">
        <h1 className="features-div__headline">Featured Products</h1>
        <ul className="headline__list">
          <li className="body">
            <div className="body__content">
              <img
                src={currentSlide.img}
                alt={currentSlide.text}
                className="img"
              />
              <h3 className="text">{currentSlide.text}</h3>
            </div>
          </li>
        </ul>
        
      <button onClick={goToPrevious}>{"<-"} Prev</button>
      <button onClick={goToNext}>Next {"->"}</button>
      </div>
    </section>
  );
};

export default Features;
