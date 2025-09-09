
import SideBar from './SideBar/SideBar'
import ProfileMain from './Main/ProfileMain';

const Profile = () => {
  return (
    <div className='h-full w-screen flex'>
      <SideBar />
      <ProfileMain />
    </div>
  );
}

export default Profile