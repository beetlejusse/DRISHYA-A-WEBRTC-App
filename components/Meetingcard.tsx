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
}: MeetingCardProps) => {

    const {toast} = useToast()
    
  return <div className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
    <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming meetings images" width={28} height={28} />
        <div className="flex justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold text-tighter">{title}</h1>
                <p className="text-sm font-normal">{date}</p>
            </div>
        </div>
    </article>
    <article className={cn("flex justify-center relative", {})}>
        {!isPreviousMeeting && (
            <div className="flex gap-2">
                <Button className="rounded bg-dark-4 px-6 hover:bg-blue-700" onClick={handleClick}>
                    { buttonIcon && (
                        <Image src={buttonIcon} alt="feature" width={20} height={20} />
                    )}
                    &nbsp; {buttonText}
                </Button>
                <Button onClick={() => {
                    navigator.clipboard.writeText(link)
                    toast({
                        title: "Link Copied"
                    }) 
                }} className="bg-dark-4 px-6">
                    <Image src='/icons/copy.svg' alt={"feature"} width={20} height={20} /> &nbsp; Copy Link
                </Button>
            </div>
        )}
    </article>
  </div>;
};

export default Meetingcard;
