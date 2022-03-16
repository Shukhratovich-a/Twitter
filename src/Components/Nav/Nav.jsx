import languages from "../../Localization/Languages";

import "./Nav.scss";

const Nav = () => {
  const lang = "en";

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item nav__item--active">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem1}>
            <span className="nav__link__inner">{languages[lang].nav.navItem1}</span>
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem2}>
            <span className="nav__link__inner">{languages[lang].nav.navItem2}</span>
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem3}>
            <span className="nav__link__inner">{languages[lang].nav.navItem3}</span>
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem4}>
            <span className="nav__link__inner">{languages[lang].nav.navItem4}</span>
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem5}>
            <span className="nav__link__inner">{languages[lang].nav.navItem5}</span>
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem6}>
            <span className="nav__link__inner">{languages[lang].nav.navItem6}</span>
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem7}>
            <span className="nav__link__inner">{languages[lang].nav.navItem7}</span>
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#link" aria-label={languages["en"].nav.navItem8}>
            <span className="nav__link__inner">{languages[lang].nav.navItem8}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
