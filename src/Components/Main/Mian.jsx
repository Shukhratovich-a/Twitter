import SectionTop from "../SectionTop/SectionTop";
import languages from "../../Localization/Languages";

const Main = () => {
  const lang = "en";

  return (
    <main>
      <SectionTop text={languages[lang].nav.navItem1} />
    </main>
  );
};

export default Main;
