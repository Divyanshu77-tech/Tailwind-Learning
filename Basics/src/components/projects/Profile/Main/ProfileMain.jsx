import React from 'react'
import ProfileMainHeader from './ProfileMainHeader'
import ProfileMainCard from './ProfileMainCard'
import ProfileMainHero from './ProfileMainHero'
import ProfileMainHeroGird from './ProfileMainHeroGird'

const ProfileMain = () => {
  return (
    <div className='flex-1 flex flex-col items-center '>
      <ProfileMainHeader />
      <ProfileMainCard />
      <ProfileMainHero />
      <ProfileMainHeroGird />
    </div>
  )
}

export default ProfileMain