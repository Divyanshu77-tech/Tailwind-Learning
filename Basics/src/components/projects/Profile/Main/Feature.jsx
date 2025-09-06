import React from 'react'

const Feature = () => {
  return (
    <div className="col-span-1 grid grid-rows-2 items-center">
      <div className="w-[95%] px-3 py-4 rounded-xl grid grid-cols-2 gap-5 justify-items-center shadow-[0_0px_10px_2px_rgb(0,0,0,0.1)]">
        <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
          <div className="h-14 w-14 bg-green-400 rounded-lg flex items-center justify-center">
            <i class="ri-calendar-schedule-line text-4xl"></i>
          </div>
          <p className="font-semibold text-[0.88rem]">Schedule a Webinar</p>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
          <div className="h-14 w-14 bg-green-400 rounded-lg flex items-center justify-center">
            <i class="ri-video-on-ai-line text-4xl"></i>
          </div>
          <p className="font-semibold text-[0.88rem]">Join a Webinar</p>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
          <div className="h-14 w-14 bg-green-400 rounded-lg flex items-center justify-center">
            <i class="ri-add-line text-4xl"></i>
          </div>
          <p className="font-semibold text-[0.88rem]">Open Recordings</p>
        </div>
      </div>
    </div>
  );
}

export default Feature