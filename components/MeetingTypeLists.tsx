"use client";
import React, { useState } from "react";
import { CardsAtHome } from "./CardsAtHome";
import { useRouter } from "next/navigation";
import { MeetingModal } from "./Modals/MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { ApiError } from "next/dist/server/api-utils";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";

export const MeetingTypeLists = () => {
  const [meeting, setmeeting] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();
  const [meetValue, setMeetValues] = useState({
    dateTime: new Date(),
    description: '',
    link: ''
  })
  const [callDetails, setCallDetails] = useState<Call>()
  const {toast} = useToast()

  //checking for user creating client and alxo creating meetings
  const {user} = useUser()
  const client = useStreamVideoClient()
  const createMeeting = async() => {
    if(!client || !user){
      return ;
    }

    try {

      if(!meetValue.dateTime){
        toast({
          title: "Please select date and time to start meeting",
          variant: "destructive",
          action: <ToastAction altText="Try again">Try again</ToastAction>
        })
        return ;
      }

      const callId = crypto.randomUUID()
      const call = client.call('default', callId)
      if(!call){
        toast({
          title: "Failed to Create new Call",
          variant: "destructive",
          action: <ToastAction altText="Try again">Try again</ToastAction>
        })
        throw new Error('Failed to Create new Call')
      }

      const startsAt = meetValue.dateTime.toISOString() || new Date(Date.now()).toISOString()

      const description = meetValue.description || 'Instant Meeting'

      //when we click start meeting this thing is called and rest is working
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description
          }
        }
      })
      setCallDetails(call)

      if(!meetValue.description){
        router.push(`/meeting/${call.id}`)
      }
      toast({
        title: "Meeting Created"
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "failed to create meeting",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      throw new Error(error)
    }
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <CardsAtHome
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant Meeting"
        handleClick={() => setmeeting("isInstantMeeting")}
        className="bg-orange-1"
      />

      <CardsAtHome
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="join via invitation link"
        handleClick={() => setmeeting("isJoiningMeeting")}
        className="bg-blue-1"
      />

      <CardsAtHome
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan a Meeting"
        handleClick={() => setmeeting("isScheduleMeeting")}
        className="bg-purple-1"
      />

      <CardsAtHome
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        handleClick={() => router.push('/recordings')}
        className="bg-yellow-1"
      />

      <MeetingModal
        isOpen={meeting === 'isInstantMeeting'}
        onClose={async () => setmeeting(undefined)}
        title="Start an Instant Meeting"
        className='text-center'
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};
