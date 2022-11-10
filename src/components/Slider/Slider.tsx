import "./Slider.scss";

export const Slider = () => {
  return (
    <main className="slider">
      <section className="slider__container">
        <h1 className="slider__title">The Power of Simplicity</h1>
        <div className="slider__subtitle">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </div>
        <button className="slider__button">Learn</button>
      </section>
      <ul className="slider__dots">
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot slider__dot-active"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
      </ul>
    </main>
  );
};
