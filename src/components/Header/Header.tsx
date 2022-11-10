import { ReactComponent as LogoIcon } from "../../assets/icon/apple-logo.svg";
import { ReactComponent as BurgerMenuIcon } from "../../assets/icon/burger-menu.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <LogoIcon />
      </a>
      <nav className="header__navigation">
        <a href="#" className="header__navigation-link">
          Features
        </a>
        <a href="#" className="header__navigation-link">
          Partners
        </a>
        <a href="#" className="header__navigation-link">
          Stories
        </a>
      </nav>
      <button className="header__button">Download for free</button>
      <div className="header__menu-mobile">
        <BurgerMenuIcon />
      </div>
    </header>
  );
};
