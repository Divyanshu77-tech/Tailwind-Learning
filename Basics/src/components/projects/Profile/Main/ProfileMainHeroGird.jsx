import React from 'react'
import GridBox from './GridBox';

const ProfileMainHeroGird = () => {
  return (
    <div className="m-8 w-[90%] px-2 py-4 grid grid-cols-2 gap-4 rounded-xl shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]}">
      <GridBox
        description={"Schedule a webinar"}
        logo={<i className="ri-calendar-line"></i>}
      />
      <GridBox
        description={"Join a webinar"}
        logo={<i className="ri-add-line"></i>}
      />
      <GridBox
        description={"Open recordings"}
        logo={<i className="ri-movie-2-line"></i>}
      />
    </div>
  );
}

export default ProfileMainHeroGird