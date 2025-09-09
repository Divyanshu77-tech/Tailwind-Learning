import React from 'react'
import "../style.css"

const GridBox = ({description , logo}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='bg-green-500 rounded-xl w-12 h-12 flex-center text-2xl'>
        {logo}
      </div>
      <p className='text-[0.9rem] font-semibold'>{description}</p>
    </div>
  )
}

export default GridBox