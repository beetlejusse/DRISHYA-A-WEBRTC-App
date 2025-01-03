import { CallList } from '@/components/CallList'
import React from 'react'

export default function Previousmeetings () {
  return (
    <div className='flex size-fll flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>
        Previous Meetings
      </h1>

      <CallList type='endedMeeting' />
    </div>
)
}
