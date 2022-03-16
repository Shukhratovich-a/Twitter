import LogoImage from "../../Assets/Images/twitter-logo.svg";

import "./Logo.scss";

const Logo = () => {
  return (
    <a className="logo" href="index.html">
      <img className="logo__image" src={LogoImage} alt="Twitter's logo" width={35} height={35} />
    </a>
  );
};

export default Logo;
