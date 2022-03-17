import SectionTop from "../SectionTop/SectionTop";
import languages from "../../Localization/Languages";
import NewTweet from "../NewTweet/NewTweet";
import Tweets from "../Tweets/Tweets";

const Main = () => {
  const lang = "en";

  return (
    <main>
      <SectionTop text={languages[lang].nav.navItem1} />
      <NewTweet />
      <Tweets />
    </main>
  );
};

export default Main;
