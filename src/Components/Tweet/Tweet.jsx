import More from "../Lib//Icons/More";
import Like from "../Lib/Icons/Like";
import Comment from "../Lib/Icons/Comments";
import Retweet from "../Lib/Icons/Retweet";
import Statistic from "../Lib/Icons/Statistic";
import Nuetral from '../../Assets/Images/Icons/nuetral.svg'

import "./Tweet.scss";
import Share from "../Lib/Icons/Share";

const Tweet = ({ tweet }) => {
  return (
    <li className="tweet">
      <img
        className="tweet__avatar"
        src={tweet.userAvatar || Nuetral}
        alt=""
        width={60}
        height={60}
      />

      <div className="tweet__inner">
        <div className="tweet__top">
          <div className="tweet__top__left">
            <h3 className="tweet__user-name">{tweet.name}</h3>
            <a className="tweet__user-nick" href="#link">
              {tweet.userName}
            </a>
            <span className="tweet__last-activity">{tweet.lastActivity}</span>
          </div>

          <button className="tweet__top__button">
            <More />
          </button>
        </div>

        <p className="tweet__description">{tweet.tweetDescription}</p>

        {tweet.tweetImage ? (
          <img
            className="tweet__image"
            src={tweet.tweetImage}
            alt={tweet.name + "'s shared image"}
            width={700}
            height={500}
          />
        ) : null}

        <ul className="tweet__list">
          <li className="tweet__item">
            <button className="tweet__item__button" name="comments">
              <Comment />

              {tweet.commentsCount || ""}
            </button>
          </li>

          <li className="tweet__item">
            <button
              className={`tweet__item__button ${
                tweet.retweet.isRetweeted ? "tweet__item__button--retweeted" : ""
              }`}
              name="reposts"
            >
              <Retweet />
              {tweet.retweet.retweetCount || ""}
            </button>
          </li>

          <li className="tweet__item">
            <button
              className={`tweet__item__button ${
                tweet.like.isLiked ? "tweet__item__button--liked" : ""
              }`}
              name="likes"
            >
              <Like isLiked={tweet.like.isLiked} />

              {tweet.like.likesCount || ""}
            </button>
          </li>

          <li className="tweet__item">
            <Share />

            <button className="tweet__item__button" name="share"></button>
          </li>

          <li className="tweet__item">
            <Statistic />

            <button className="tweet__item__button" name="statistic"></button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Tweet;
