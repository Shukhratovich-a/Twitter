import SectionTop from "../SectionTop/SectionTop";
import languages from "../../Localization/Languages";
import NewTweet from "../NewTweet/NewTweet";

const Main = () => {
  const lang = "en";

  return (
    <main>
      <SectionTop text={languages[lang].nav.navItem1} />
      <NewTweet />
    </main>
  );
};

export default Main;
