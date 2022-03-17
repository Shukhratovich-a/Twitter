import Tweet from "../Tweet/Tweet";

import "./Tweets.scss";

const Tweets = () => {
  const tweets = [
    {
      id: 0,
      name: "Designsta",
      userName: "@inner",
      userAvatar: "",
      lastActivity: "25m",
      tweetDescription:
        "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      tweetImage: "",
      commentsCount: 10,
      retweet: {
        isRetweeted: false,
        retweetCount: 1,
      },
      like: {
        isLiked: false,
        likesCount: 8,
      },
    },
    {
      id: 1,
      name: "cloutexhibition",
      userName: "@RajLahoti",
      userAvatar: "",
      lastActivity: "22m",
      tweetDescription:
        "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      tweetImage: "",
      commentsCount: 0,
      retweet: {
        isRetweeted: true,
        retweetCount: 5,
      },
      like: {
        isLiked: true,
        likesCount: 9,
      },
    },
    {
      id: 2,
      name: "CreativePhoto",
      userName: "@cloutexhibition",
      userAvatar: "",
      lastActivity: "1h",
      tweetDescription: "Обетда..... Кечиринглар",
      tweetImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlbo58Fo-_tDH2iEyph6YRmJVgGUCxF0_pg&usqp=CAU",
      commentsCount: 10,
      retweet: {
        isRetweeted: false,
        retweetCount: 1,
      },
      like: {
        isLiked: false,
        likesCount: 8,
      },
    },
  ];

  return (
    <section className="tweets">
      <ul className="tweets__list">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ul>
    </section>
  );
};

export default Tweets;
