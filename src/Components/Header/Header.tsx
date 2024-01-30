import Profile from "./Profile";
import SettingIcon from "../../assets/icons/carbon_settings.svg";
import "./Header.css";
// import Search from "../Body/Search";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Profile />
        <button>
          <img alt="settings" src={SettingIcon} />
        </button>
      </div>
      {/* <Search /> */}
    </div>
  );
};

export default Header;
