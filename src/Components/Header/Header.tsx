import Profile from "./Profile";
import SettingIcon from "../../assets/icons/carbon_settings.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Profile />
        <button>
          <img alt="settings" src={SettingIcon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
