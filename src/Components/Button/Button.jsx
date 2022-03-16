import "./Button.scss";

const Button = ({ text, classModifier }) => {
  return <button className={`${classModifier} button`} title={text}>{text}</button>;
};

export default Button;
