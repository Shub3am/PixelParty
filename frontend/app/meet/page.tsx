"use client"

import { useContext, useEffect, useState, useRef } from "react"
import ReactPlayer from "react-player"
import { useSearchParams } from 'next/navigation'
import { useSocket } from "../Providers/socket";
// import { io } from "socket.io-client";
export default function Meet() {

    const [connection, setConnection] = useState([])
    const socket = useSocket()
    
    const searchParams = useSearchParams()
    const [roomId, setRoomId] = useState("")
    const [localStream, setLocal] = useState({})
    const [remoteStream, setRemote] = useState([])
    const [test ,setTest] = useState([])
    const vidRef = useRef([])
    useEffect(()=> {
        console.log(Boolean(socket), '2')
        console.log(socket, '1')
        if (socket.id) {
       console.log("we called")     
        socket.emit("newMeet", "Hwey")
        socket.on('newJoin', (data)=> {
            console.log(data, "called")
        })
        }

        

        if (searchParams.has("roomId")) {
            // socket.emit(searchParams.get("roomId"), (resp) => {
            //     console.log(resp)
            // })
        (async()=> {
            setRoomId(searchParams.get("roomId"))

            // console.log(mediaDevices)
            let allDevices = await navigator.mediaDevices.enumerateDevices()
            let local = await navigator.mediaDevices.getUserMedia({video: {facingMode: "user "}, audio: true})
            setTest(allDevices)

            let localHost = new RTCPeerConnection(config)
            local.getTracks().forEach(track => localHost.addTrack(track, local))
            // console.log(localHost.ontrack)
            setConnection(localHost)
            setLocal(local)
            vidRef.current.srcObject = local
        })() }
    }, [socket])
    
    const config = {
        "IceServers": [{ "url": "stun:freestun.net:3479" }, {"url": "stun:stun.l.google.com:19302"}],
      };

      
    if (localStream) {
        // console.log(roomId)
        
        return (<div><h1>Only Me</h1><h1>{test[0]?.label}</h1><div className="flex justify-center align-middle items-center"><video ref={vidRef} playsInline={true} width={250} height={250} autoPlay={true}></video></div></div>)
    } 
}

//5d0yljesPdqwVVIA