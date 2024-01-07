"use client"

import { useContext, useEffect, useState, useRef } from "react"
import ReactPlayer from "react-player"
import { MediaDevices } from "../Providers/MediaDevices";
export default function Meet() {

    const [connection, setConnection] = useState([])
    const [localStream, setLocal] = useState({})
    const [remoteStream, setRemote] = useState([])
    const vidRef = useRef([])
    useEffect(()=> {
        (async()=> {
            // console.log(mediaDevices)
            let allDevices = await navigator.mediaDevices.enumerateDevices()
            let local = await navigator.mediaDevices.getUserMedia({video: {facingMode: "user "}, audio: true})
            let localHost = new RTCPeerConnection(config)
            local.getTracks().forEach(track => localHost.addTrack(track, local))
            // console.log(localHost.ontrack)
            setConnection(localHost)
            setLocal(local)
            vidRef.current.srcObject = local
        })()
    }, [])
    
    const config = {
        "IceServers": [{ "url": "stun:freestun.net:3479" }, {"url": "stun:stun.l.google.com:19302"}],
      };

      console.log(Boolean(localStream))
    if (localStream.id && connection && remoteStream.id) {

    return <div><h1>Others</h1><ReactPlayer url={localStream} playing={true}/><ReactPlayer url={remoteStream}/></div> }
    else if (localStream) {
        return (<div><h1>Only Me</h1><div className="flex justify-center align-middle items-center"><video ref={vidRef} playsInline={true} width={250} height={250} autoPlay={true}></video></div></div>)
    } 
}

//5d0yljesPdqwVVIA