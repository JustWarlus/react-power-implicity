import { Header } from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";
import "./main.scss";

export const App = () => {
  return (
    <section className="container">
      <Header />
      <Slider />
    </section>
  );
};
