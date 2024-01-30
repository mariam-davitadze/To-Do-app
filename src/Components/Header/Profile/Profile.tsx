const DumbData = {
  userName: "James Ronald",
  userImg: require("../../../assets/user_img.png"),
};

const Profile = () => {
  return (
    <div className="user-profile">
      <img alt="profile_img" src={DumbData.userImg} />
      <div>{DumbData.userName}</div>
    </div>
  );
};

export default Profile;
