import "./SectionTop.scss";

const SectionTop = ({ text }) => {
  return (
    <section className="section-top">
      <h2 className="section-top__heading">{text}</h2>

      <button className="section-top__button" name="theme"></button>
    </section>
  );
};

export default SectionTop;
