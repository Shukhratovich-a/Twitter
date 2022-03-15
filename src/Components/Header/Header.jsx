import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Nav />
      <Button text={"Tweet"} />
    </div>
  );
};

export default Header;
