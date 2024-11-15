'use client'

import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, {useEffect, useState} from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({setisSetupComplete}: {setisSetupComplete: (value: boolean) => void}) => {

    const [isMicCameraToggleOn, setisMicCameraToggleOn] = useState(false)

    const call = useCall()

    if(!call){
        throw new Error('useCall must be used within StrreamCall component')
    }

    useEffect(() => {
        if(isMicCameraToggleOn){
            call?.camera.disable()
            call?.microphone.disable()
        } else{
            call?.camera.enable()
            call?.microphone.enable()
        }
    }, [isMicCameraToggleOn, call?.camera, call?.microphone])
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-3 text-white'>
        <h1 className="text-center text-2xl mb-4 font-bold">Setup</h1>
        <VideoPreview className='flex items-center justify-center size-7/12' />
        <div className="flex items-center justify-center h-16 gap-3">
            <label className='flex items-center justify-center gap-2 font-medium'>
                <input type="checkbox"
                    checked={isMicCameraToggleOn}
                    onChange={(e) => setisMicCameraToggleOn(e.target.checked)}
                />
                Join with Mic and Camera off
            </label>
            <DeviceSettings />
        </div>
        <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();

          setisSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  )
}

export default MeetingSetup