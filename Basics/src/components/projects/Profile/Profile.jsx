import ProfileMain from "./Main/ProfileMain";
import SideBar from "./SideBar/SideBar";

const Profile = () => {
  return (
    <div className="h-screen w-screen flex overflow-y-auto">
      <SideBar />
      <ProfileMain />
    </div>
  );
};

export default Profile;
