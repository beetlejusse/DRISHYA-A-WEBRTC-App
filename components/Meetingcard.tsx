// "use client";

// import { useToast } from "@/hooks/use-toast";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import React from "react";
// import { Button } from "./ui/button";

// interface MeetingCardProps {
//   title: string;
//   date: string;
//   icon: string;
//   isPreviousMeeting?: boolean;
//   buttonIcon?: string;
//   buttonText?: string;
//   handleClick: () => void;
//   link: string;
// }

// const Meetingcard = ({
//   icon,
//   title,
//   date,
//   isPreviousMeeting,
//   buttonIcon,
//   handleClick,
//   link,
//   buttonText,
// }: MeetingCardProps) => {

//     const {toast} = useToast()
    
//   return <div className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
//     <article className="flex flex-col gap-5">
//         <Image src={icon} alt="upcoming meetings images" width={28} height={28} />
//         <div className="flex justify-between">
//             <div className="flex flex-col gap-2">
//                 <h1 className="text-xl font-bold text-tighter">{title}</h1>
//                 <p className="text-sm font-normal">{date}</p>
//             </div>
//         </div>
//     </article>
//     <article className={cn("flex justify-center relative", {})}>
//         {!isPreviousMeeting && (
//             <div className="flex gap-2">
//                 <Button className="rounded bg-dark-4 px-6 hover:bg-blue-700" onClick={handleClick}>
//                     { buttonIcon && (
//                         <Image src={buttonIcon} alt="feature" width={20} height={20} />
//                     )}
//                     &nbsp; {buttonText}
//                 </Button>
//                 <Button onClick={() => {
//                     navigator.clipboard.writeText(link)
//                     toast({
//                         title: "Link Copied"
//                     }) 
//                 }} className="bg-dark-4 px-6">
//                     <Image src='/icons/copy.svg' alt={"feature"} width={20} height={20} /> &nbsp; Copy Link
//                 </Button>
//             </div>
//         )}
//     </article>
//   </div>;
// };

// export default Meetingcard;


"use client";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
  className?: string; // ✅ New prop for custom styling
}

const Meetingcard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon,
  handleClick,
  link,
  buttonText,
  className, // ✅ Receiving the className prop
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <div
      className={cn(
        "flex min-h-[260px] w-full flex-col justify-between rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700",
        className // ✅ Merging custom styles
      )}
    >
      {/* Meeting Header */}
      <article className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image src={icon} alt="meeting icon" width={30} height={30} />
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h1>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
      </article>

      {/* Meeting Actions */}
      <article className={cn("flex justify-center mt-4")}>
        {!isPreviousMeeting && (
          <div className="flex gap-3">
            <Button
              className="flex items-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 transition-all duration-200"
              onClick={handleClick}
            >
              {buttonIcon && <Image src={buttonIcon} alt="button icon" width={20} height={20} />}
              {buttonText}
            </Button>

            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({ title: "Link Copied!" });
              }}
              className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-5 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
            >
              <Image src="/icons/copy.svg" alt="copy icon" width={20} height={20} />
              Copy Link
            </Button>
          </div>
        )}
      </article>
    </div>
  );
};

export default Meetingcard;
