"use client"

import { useEffect, useState } from "react"

export function TimeDisplay() {
  const [time, setTime] = useState<string>("")
  const [date, setDate] = useState<string>("")

  useEffect(() => {
    function updateDateTime() {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }))
      setDate(now.toLocaleDateString('en-US', { 
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      }))
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-sm">
      <span>{time}</span>
      <span className="mx-1">•</span>
      <span>{date}</span>
    </div>
  )
}

