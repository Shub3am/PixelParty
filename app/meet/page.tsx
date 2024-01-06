"use client"


import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

export default function Meet() {
    const config = {
        "IceServers": [{ "url": "stun:freestun.net:3479" }, {"url": "stun:stun.l.google.com:19302"}],
      };

    const [videoDevices, setVideoDevices] = useState([])
    const [audioDevices, setAudioDevices] = useState([])
    const [connection, setConnection] = useState([])
    const [localStream, setLocal] = useState({})
    const [remoteStream, setRemote] = useState([])
    useEffect(()=> {
        (async()=> {
            let allDevices = await navigator.mediaDevices.enumerateDevices()
            let vidDevices = []
            let audDevices = []
            allDevices.forEach(item => (item.kind == "videoinput") ? vidDevices.push(item): audDevices.push(item))
            setVideoDevices(vidDevices)
            setAudioDevices(audDevices)

            let local = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
            // await navigator.mediaDevices.selectAudioOutput({deviceId: "968cfffeb0873b36228f1c19bb164cdbbba90819e6b7a16947127997a4fd0972"})
            const audioContext = new AudioContext()
            console.log(allDevices)
            let localHost = new RTCPeerConnection(config)
            local.getTracks().forEach(track => localHost.addTrack(track, local))
            console.log(localHost.ontrack)
            setConnection(localHost)
            setLocal(local)
            
        })()
    }, [])
    if (localStream.id && connection && remoteStream.id) {

    return <div><h1>Others</h1><ReactPlayer url={localStream} playing={true}/><ReactPlayer url={remoteStream}/></div> }
    // else if (localStream.id && connection) {
    //     console.log(audioDevices)
    //     return (<div><h1>Only Me</h1><ReactPlayer url={localStream} playing={true}/></div>)
    // } 
    else {
        console.log(videoDevices, audioDevices)
        const chooseVideo = videoDevices.map(item => <option value={item.deviceId}>{item.label}</option> )
        const chooseAudio = audioDevices.map(item => <option value={item.deviceId}>{item.label}</option> )
        return <div><select>{chooseVideo}</select><select>{chooseAudio}</select></div>
    }
}

//5d0yljesPdqwVVIA