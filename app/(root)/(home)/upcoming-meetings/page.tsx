import { CallList } from '@/components/CallList'
import React from 'react'

export default function UpcomingMeetings (){
  return (
    <div className='flex size-fll flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>
        Upcomings
      </h1>

      <CallList type="upcomingMeeting" />
    </div>
  )
}