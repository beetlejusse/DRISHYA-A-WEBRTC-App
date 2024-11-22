'use client'

import Loader from '@/components/Loader'
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, {useState} from 'react'

export default function Meeting({params: {id}}: { params: { id: string } }) {

  const { isLoaded } = useUser()
  const [isSetupComplete, setisSetupComplete] = useState(false)
  const {call, iscallLoading} = useGetCallById(id)

  if(!isLoaded || iscallLoading) return <Loader />

  return (
    <main className='h-full w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {
            !isSetupComplete ? (
              <MeetingSetup setisSetupComplete={setisSetupComplete} />
            ) : (
              <MeetingRoom />
            )
          }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

