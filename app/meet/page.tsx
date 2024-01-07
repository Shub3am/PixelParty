"use client"

import { useContext, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { MediaDevices } from "../Providers/MediaDevices";
export default function Meet() {
    const mediaDevices = useContext(MediaDevices)
    const [connection, setConnection] = useState([])
    const [localStream, setLocal] = useState({})
    const [remoteStream, setRemote] = useState([])
    useEffect(()=> {
        (async()=> {
            console.log(mediaDevices)
            let allDevices = await navigator.mediaDevices.enumerateDevices()
            let local = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
            prompt("hey")
            let localHost = new RTCPeerConnection(config)
            local.getTracks().forEach(track => localHost.addTrack(track, local))
            // console.log(localHost.ontrack)
            setConnection(localHost)
            setLocal(local)
            
        })()
    }, [])
    
    const config = {
        "IceServers": [{ "url": "stun:freestun.net:3479" }, {"url": "stun:stun.l.google.com:19302"}],
      };


    if (localStream.id && connection && remoteStream.id) {

    return <div><h1>Others</h1><ReactPlayer url={localStream} playing={true}/><ReactPlayer url={remoteStream}/></div> }
    else if (localStream.id && connection) {
        return (<div><h1>Only Me</h1><ReactPlayer url={localStream} playing={true}/></div>)
    } 
}

//5d0yljesPdqwVVIA