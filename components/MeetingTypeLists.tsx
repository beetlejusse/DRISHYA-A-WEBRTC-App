"use client";
import React, { useState } from "react";
import { CardsAtHome } from "./CardsAtHome";
import { useRouter } from "next/navigation";
import { MeetingModal } from "./Modals/MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";
import { Input } from "./ui/input";
import { Calendar, Users, Video, FileVideo } from "lucide-react";

export const MeetingTypeLists = () => {
  const [meeting, setMeeting] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const [meetValue, setMeetValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useUser();
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    if (!client || !user) {
      return;
    }

    try {
      if (!meetValue.dateTime) {
        toast({
          title: "Please select date and time to start meeting",
          variant: "destructive",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        return;
      }

      const callId = crypto.randomUUID();
      const call = client.call("default", callId);

      if (!call) {
        toast({
          title: "Failed to create new call",
          variant: "destructive",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        throw new Error("Failed to create new call");
      }

      const startsAt = meetValue.dateTime.toISOString();
      const description = meetValue.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!meetValue.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({
        title: "Meeting Created",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Failed to create meeting",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  const actions = [
    {
      title: "New Meeting",
      description: "Start an Instant Meeting",
      icon: Video,
      handleClick: () => setMeeting("isInstantMeeting"),
      className: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      title: "Schedule Meeting",
      description: "Plan a Meeting",
      icon: Calendar,
      handleClick: () => setMeeting("isScheduleMeeting"),
      className: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "Join Meeting",
      description: "Join via invitation link",
      icon: Users,
      handleClick: () => setMeeting("isJoiningMeeting"),
      className: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Personal Room",
      description: "Enjoy With Your Friends",
      icon: FileVideo,
      handleClick: () => router.push("/personal-room"),
      className: "bg-gradient-to-br from-amber-500 to-amber-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {actions.map((action, i) => (
        <CardsAtHome
          key={action.title}
          img={action.icon}
          title={action.title}
          description={action.description}
          handleClick={action.handleClick}
          className={action.className}
          i={i}
        />
      ))}

      {!callDetails ? (
        <MeetingModal
          isOpen={meeting === "isScheduleMeeting"}
          onClose={() => setMeeting(undefined)}
          title="Create Meeting"
          className="text-center"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-3">
            <label className="text-base leading-[22px] text-sky-2">
              Add a Description
            </label>
            <Textarea
              className="border-none bg-black focus-visible:ring-0"
              onChange={(e) =>
                setMeetValues({ ...meetValue, description: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-base leading-[22px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={meetValue.dateTime}
              onChange={(date) =>
                setMeetValues({
                  ...meetValue,
                  dateTime: date || new Date(),
                })
              }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-2 p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meeting === "isScheduleMeeting"}
          onClose={() => setMeeting(undefined)}
          title="Meeting Created"
          className="text-center"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link Copied" });
          }}
          image="/icons/checked.svg"
          buttonIcon="/icons/copy.svg"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meeting === "isInstantMeeting"}
        onClose={() => setMeeting(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />

      <MeetingModal
        isOpen={meeting === "isJoiningMeeting"}
        onClose={() => setMeeting(undefined)}
        title="Copy the Link Here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(meetValue.link)}
      >
        <Input
          placeholder="Meeting Link"
          className="border-none bg-dark-2 focus-visible:ring-0"
          onChange={(e) =>
            setMeetValues({ ...meetValue, link: e.target.value })
          }
        />
      </MeetingModal>
    </section>
  );
};
