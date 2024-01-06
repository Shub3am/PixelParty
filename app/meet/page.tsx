"use client"


import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

export default function Meet() {
    const config = {
        "IceServers": [{ "url": "stun:freestun.net:3479" }, {"url": "stun:stun.l.google.com:19302"}],
      };


    const [connection, setConnection] = useState([])
    const [localStream, setLocal] = useState({})
    const [remoteStream, setRemote] = useState([])
    useEffect(()=> {
        (async()=> {
            
            let local = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
            let localHost = new RTCPeerConnection(config)
            local.getTracks().forEach(track => localHost.addTrack(track, local))
            localHost.ontrack(track=> {
                setRemote(track.streams[0])
            })
            setConnection(localHost)
            setLocal(local)
            
        })()
    }, [])
    if (localStream.id && connection && remoteStream.id) {
    return <div><h1>Others</h1><ReactPlayer url={localStream} playing={true}/><ReactPlayer url={remoteStream}/></div> }
    else if (localStream.id && connection) {
        return (<div><h1>Only Me</h1><ReactPlayer url={localStream} playing={true}/></div>)
    }
}

//5d0yljesPdqwVVIA