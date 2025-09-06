import React from 'react'
import SideBar from './SideBar'
import Main from './Main/Main'

const Profile = () => {
  return (
    <div className="h-screen w-screen flex">
      <SideBar />
      <Main />
    </div>
  )
}

export default Profile