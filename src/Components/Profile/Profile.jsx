import Nuetral from "../../Assets/Images/Icons/nuetral.svg";
import More from "../Lib/Icons/More";

import './Profile.scss'

const Profile = () => {
  return (
    <div className="profile">
      <img className="profile__avatar" src={Nuetral} alt="Avatar" width={50} height={50} />

      <div className="profile__inner">
        <a className="profile__user-name" href="#link">
          Shukhratovich
        </a>
        <a className="profile__nick-name" href="#link">
          @Shukhratovich_a
        </a>
      </div>

      <button className="profile__button">
        <More />
      </button>
    </div>
  );
};

export default Profile;
