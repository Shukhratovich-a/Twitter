import LogoImage from "../../Assets/Images/twitter-logo.svg";

import "./Logo.scss";

const Logo = () => {
  return (
    <a className="logo" href="index.html">
      <img className="log__image" src={LogoImage} alt="Twitter's logo" width={40} height={33} />
    </a>
  );
};

export default Logo;
