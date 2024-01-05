"use client"

import { useEffect, useState, useRef } from "react"

export default function VideoCall() {
    const [stream, setStream] = useState([])
    const [getVideo, setVideo] = useState([])
    const [getAudio, setAudio] = useState([])
    const videoref = useRef({current: {srcObject: null}})
    useEffect(()=> {    
        (async()=> {
        let record = await navigator.mediaDevices.getUserMedia({audio: true, video: true})
        if (record.active) {
            setStream(record)
        }
    })()
}, [])
if (stream.active) {
    let tracks = stream
const audio = new Audio()
audio.autoplay= true;
console.log(tracks, "check")
console.log(videoref)
let video = videoref.current;
videoref.current.srcObject = stream
videoref.current.play()
// video.play();


    return <div><h1>Hey</h1><video ref={videoref}></video></div> }
}