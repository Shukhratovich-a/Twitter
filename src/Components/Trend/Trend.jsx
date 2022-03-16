import More from "../Lib/Icons/More";

import "./Trend.scss";

const Trend = ({ trend }) => {
  return (
    <li className="trend">
      <a className="trend__link" href="#link">
        <div className="trend__inner">
          <span className="trend__country">Trending in {trend.country}</span>
          <h3 className="trend__name">{trend.name}</h3>
          <span className="trend__count">{trend.tweetsCount} Tweets</span>
        </div>

        <button className="trend__button" name="More" title="more">
          <More />
        </button>
      </a>
    </li>
  );
};

export default Trend;
