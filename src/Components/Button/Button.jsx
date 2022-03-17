import TweetIcon from "../Lib/Icons/Tweet";
import "./Button.scss";

const Button = ({ text, classModifier }) => {
  return (
    <button className={`${classModifier} button`} title={text}>
      <TweetIcon />
      <span className="button__inner">{text}</span>
    </button>
  );
};

export default Button;
