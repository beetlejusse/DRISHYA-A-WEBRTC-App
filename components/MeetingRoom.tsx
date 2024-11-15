import { cn } from "@/lib/utils";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";
import { div, pre } from "framer-motion/client";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";

type callLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const [layout, setLayout] = useState<callLayoutType>("speaker-left");
  //render a specific layout depending on a specific layout state
  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  const searchParams = useSearchParams()
  const isPersonnelRoom = !!searchParams.get('personnel')  //for personal room
  const [showParticipants, setShowParticipants] = useState(false);
  const {useCallCallingState} = useCallStateHooks()
  const callingState = useCallCallingState()
  if(callingState!== CallingState.JOINED) return <Loader />


  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh - 86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
        <div className="flex flex-wrap items-center justify-center fixed bottom-0 w-full gap-5">
          <CallControls />

          <DropdownMenu>
            <div className="flex items-center">
              <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                <LayoutList size={20} className="text-white" />
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
              {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => {
                return(
                  <div key={index}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#19232d]" onClick={() => {
                    setLayout(item.toLocaleLowerCase() as callLayoutType) 
                  }}>{item}</DropdownMenuItem>
                </div>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <CallStatsButton />

          <button onClick={() => setShowParticipants((prev) => !prev)}>
            <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <Users size={20} className="text-white" />
            </div>
          </button>
          {
            !isPersonnelRoom && <EndCallButton />
          }
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;
