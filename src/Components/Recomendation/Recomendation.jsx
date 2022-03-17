import "./Recomendation.scss";
import Nuetral from "../../Assets/Images/Icons/nuetral.svg";

const Recomendation = ({ recomendation }) => {
  return (
    <li className="recomendation">
      <div className="recomendation__inner">
        <img
          className="recomendation__avatar"
          src={recomendation.avatar || Nuetral}
          alt={recomendation.name + "'s avatar"}
          width={60}
          height={60}
        />
        <div className="recomendation__info">
          <a className="recomendation__name" href="#link">
            {recomendation.name}
          </a>
          <a className="recomendation__nick-name" href="#link">
            {recomendation.userName}
          </a>
        </div>
      </div>

      <button className="recomendation__button" name="Follow" title="Follow">
        Follow
      </button>
    </li>
  );
};

export default Recomendation;
