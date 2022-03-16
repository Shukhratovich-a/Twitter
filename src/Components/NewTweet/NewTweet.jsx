import Button from "../Button/Button";

import avatar from "../../Assets/Images/Avatars/12345.jpg";

import "./NewTweet.scss";

const NewTweet = () => {
  return (
    <section className="new-tweet">
      <div className="new-tweet__top">
        <img className="new-tweet__avatar" src={avatar} alt="" width={60} height={60} />

        <textarea
          className="new-tweet__input"
          cols="30"
          rows="1"
          placeholder="What's happening"
        ></textarea>
      </div>

      <div className="new-tweet__bottom">
        <ul className="new-tweet__list">
          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Media"></button>
          </li>

          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Gif"></button>
          </li>

          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Stats"></button>
          </li>

          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Emoji"></button>
          </li>

          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Schedule"></button>
          </li>
        </ul>

        <Button text={"Tweet"} classModifier={"new-tweet__button"} />
      </div>
    </section>
  );
};

export default NewTweet;
