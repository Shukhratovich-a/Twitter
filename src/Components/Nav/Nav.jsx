import languages from "../../Localization/Languages";

import "./Nav.scss";

const Nav = () => {
  const lang = "en";

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item nav__item--active">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem1}>
            {languages[lang].nav.navItem1}
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem2}>
            {languages[lang].nav.navItem2}
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem3}>
            {languages[lang].nav.navItem3}
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem4}>
            {languages[lang].nav.navItem4}
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem5}>
            {languages[lang].nav.navItem5}
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem6}>
            {languages[lang].nav.navItem6}
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem7}>
            {languages[lang].nav.navItem7}
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem8}>
            {languages[lang].nav.navItem8}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
