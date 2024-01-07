"use client"
 import { MediaDevices } from "../Providers/MediaDevices"
 import { useState, useEffect } from "react"
export default function MeetLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const [videoDevices, setVideoDevices] = useState([])
    const [audioDevices, setAudioDevices] = useState([])
    useEffect(()=> {
        (async ()=> {
            let vidDevices = []
            let audDevices = []
            const Devices = await navigator.mediaDevices.enumerateDevices()
            Devices.forEach((device)=> { 
                if (device.kind == "videoinput") {
                    vidDevices.push(device)
                } else if (device.kind == "audioinput") {
                    audDevices.push(device)
                }
            })
            setVideoDevices(vidDevices)
            setAudioDevices(audDevices)
        })()
    }, [])
    
    if (videoDevices.length && audioDevices.length) {
    return (
      <MediaDevices.Provider value={{videoDevices, audioDevices}}>
        {children}
      </MediaDevices.Provider>
    ) } 
    else {
        return <h1>No Video and Audio Device Found!</h1>
    }
  }