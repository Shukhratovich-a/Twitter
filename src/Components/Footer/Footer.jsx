import Recomendation from "../Recomendation/Recomendation";
import Trend from "../Trend/Trend";
import "./Footer.scss";

const Footer = () => {
  const trends = [
    {
      country: "Germany",
      name: "Revalution",
      tweetsCount: "50.4K",
    },
    {
      country: "Poland",
      name: "The Big Bang Theory",
      tweetsCount: "100.9K",
    },
    {
      country: "Germany",
      name: "Revalution",
      tweetsCount: "50.4K",
    },
  ];

  const recomendations = [
    {
      name: "Mushtariy",
      userName: "@Mushtar565266",
      avatar: "",
    },

    {
      name: "Shuhratbek",
      userName: "@mrshukhrat",
      avatar: "",
    },
  ];

  return (
    <footer className="footer">
      <form className="footer__form">
        <input
          className="footer__input"
          type="text"
          name="search-tweet"
          placeholder="Search twitter"
        />
      </form>

      <div className="footer__trends">
        <div className="trends__top">
          <h2 className="trends__heading">trends for you</h2>

          <button className="trends__button"></button>
        </div>

        <ul className="trends__list">
          {trends.map((trend) => (
            <Trend trend={trend} />
          ))}
        </ul>

        <button className="trends__show-button">Show more</button>
      </div>

      <div className="footer__recommendations">
        <h2 className="recommendations__heading">You might like</h2>

        <ul className="recommendations__list">
          {recomendations.map((recomendation) => (
            <Recomendation recomendation={recomendation} />
          ))}
        </ul>

        <button className="trends__show-button">Show more</button>
      </div>
    </footer>
  );
};

export default Footer;
