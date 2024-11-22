"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { Alert } from "@/components/ui/alert";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function Meeting() {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const [isSetupComplete, setisSetupComplete] = useState(false);

  if (!id) {
    return (
      <p className="text-center text-3xl font-bold text-white">
        Invalid Meeting ID
      </p>
    );
  }

  const { call, iscallLoading } = useGetCallById(id);

  if (!isLoaded || iscallLoading) return <Loader />;

  if (!call) {
    return (
      <p className="text-center text-3xl font-bold text-white">
        Call Not Found
      </p>
    );
  }

  const notAllowed =
    call.type === "invited" &&
    (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) {
    return <Alert title="You are not allowed to join this meeting" />;
  }

  return (
    <main className="h-full w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setisSetupComplete={setisSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
}
