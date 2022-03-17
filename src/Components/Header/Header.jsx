import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <Logo />
        <Nav />
        <Button text={"Tweet"} classModifier={"header__button"} />
      </div>
      <Profile />
    </div>
  );
};

export default Header;
