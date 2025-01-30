// "use client";

// import { useGetCalls } from "@/hooks/useGetCalls";
// import { Call, CallRecording  } from "@stream-io/video-react-sdk";
// import Loader  from "./Loader";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import Meetingcard from "./Meetingcard";

// export const CallList = ({
//   type,
// }: {
//   type: "endedMeeting" | "upcomingMeeting" | "recordings";
// }) => {
//   const { endedCalls, upcomingCalls, recordedCalls, isLoading } = useGetCalls();
//   const router = useRouter();
//   const [recordings, setRecordings] = useState<CallRecording[]>([]);

//   const getCalls = () => {
//     switch (type) {
//       case "endedMeeting":
//         return endedCalls;
//       case "upcomingMeeting":
//         return upcomingCalls;
//       case "recordings":
//         return recordings;
//       default:
//         return [];
//     }
//   };

//   const getNoCallsMessage = () => {
//     switch (type) {
//       case "endedMeeting":
//         return "No Previous Calls";
//       case "upcomingMeeting":
//         return "No Upcoming Calls";
//       case "recordings":
//         return "No Recordings";
//       default:
//         return "";
//     }
//   };

//   useEffect(() => {
//     const fetchRecordings = async () => {
//       const callData = await Promise.all(
//         recordedCalls.map((meeting) => meeting.queryRecordings())
//       );

//       const recordings = callData
//         .filter((call) => call.recordings.length > 0)
//         .flatMap((call) => call.recordings);
//       setRecordings(recordings);
//     };

//     if (type === "recordings") fetchRecordings();
//   }, [type, recordedCalls]);

//   const calls = getCalls();
//   const noCallsMessage = getNoCallsMessage();

//   if (isLoading) return <Loader />;

//   return (
//     <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
//       {calls && calls.length > 0 ? (
//         calls.map((meeting: Call | CallRecording) => {
//           const meetingUrl =
//             type === "recordings" && (meeting as CallRecording).url
//               ? (meeting as CallRecording).url
//               : undefined;

//           return (
//             <Meetingcard
//               key={(meeting as Call).id}
//               icon={
//                 type === "endedMeeting"
//                   ? "/icons/previous.svg"
//                   : type === "upcomingMeeting"
//                   ? "/icons/upcoming.svg"
//                   : "/icons/recordings.svg"
//               }
//               title={
//                 (meeting as Call).state?.custom?.description ||
//                 (meeting as CallRecording).filename?.substring(0, 20) ||
//                 "Personal Meeting"
//               }
//               date={
//                 (meeting as Call).state?.startsAt?.toLocaleString() ||
//                 (meeting as CallRecording).start_time?.toLocaleString()
//               }
//               isPreviousMeeting={type === "endedMeeting"}
//               buttonIcon={type === "recordings" ? "/icons/play.svg" : undefined}
//               buttonText={type === "recordings" ? "Play" : "Start"}
//               link={
//                 meetingUrl ||
//                 `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
//                   (meeting as Call).id
//                 }`
//               }
//               handleClick={
//                 meetingUrl
//                   ? () => router.push(meetingUrl)
//                   : () => router.push(`/meeting/${(meeting as Call).id}`)
//               }
//             />
//           );
//         })
//       ) : (
//         <h1>{noCallsMessage}</h1>
//       )}
//     </div>
//   );
// };


"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Meetingcard from "./Meetingcard";

export const CallList = ({
  type,
}: {
  type: "endedMeeting" | "upcomingMeeting" | "recordings";
}) => {
  const { endedCalls, upcomingCalls, recordedCalls, isLoading } = useGetCalls();
  const router = useRouter();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "endedMeeting":
        return endedCalls;
      case "upcomingMeeting":
        return upcomingCalls;
      case "recordings":
        return recordings;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "endedMeeting":
        return "No Previous Calls";
      case "upcomingMeeting":
        return "No Upcoming Calls";
      case "recordings":
        return "No Recordings";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        recordedCalls.map((meeting) => meeting.queryRecordings())
      );

      const recordings = callData
        .filter((call) => call.recordings.length > 0)
        .flatMap((call) => call.recordings);
      setRecordings(recordings);
    };

    if (type === "recordings") fetchRecordings();
  }, [type, recordedCalls]);

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">

      {calls && calls.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calls.map((meeting: Call | CallRecording) => {
            const meetingUrl =
              type === "recordings" && (meeting as CallRecording).url
                ? (meeting as CallRecording).url
                : undefined;

            return (
              <Meetingcard
                key={(meeting as Call).id}
                className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg transition duration-300 hover:shadow-xl"
                icon={
                  type === "endedMeeting"
                    ? "/icons/previous.svg"
                    : type === "upcomingMeeting"
                    ? "/icons/upcoming.svg"
                    : "/icons/recordings.svg"
                }
                title={
                  (meeting as Call).state?.custom?.description ||
                  (meeting as CallRecording).filename?.substring(0, 20) ||
                  "Personal Meeting"
                }
                date={
                  (meeting as Call).state?.startsAt?.toLocaleString() ||
                  (meeting as CallRecording).start_time?.toLocaleString()
                }
                isPreviousMeeting={type === "endedMeeting"}
                buttonIcon={type === "recordings" ? "/icons/play.svg" : undefined}
                buttonText={type === "recordings" ? "Play" : "Start"}
                link={
                  meetingUrl ||
                  `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                    (meeting as Call).id
                  }`
                }
                handleClick={
                  meetingUrl
                    ? () => router.push(meetingUrl)
                    : () => router.push(`/meeting/${(meeting as Call).id}`)
                }
              />
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40">
          <h1 className="text-gray-500 dark:text-gray-400 text-lg">
            {noCallsMessage}
          </h1>
        </div>
      )}
    </div>
  );
};
