"use client"
import { useRouter } from "next/navigation"
 import { Socket } from "../Providers/socket"
 import { io } from "socket.io-client";

 import { useState, useEffect } from "react"

export default function MeetLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const [Server, setServer] = useState([])

    useEffect(()=> {
      const server = io("ws://localhost:8000")
      server.on("connect", ()=> {
          console.log("Thanks for connecting")

      })

      setServer(server)
        return () => {
          server.close()
          server.disconnect()
      }
    }, [])

    return (
      <Socket.Provider value={Server}>
        {children}
      </Socket.Provider>
    )
  }