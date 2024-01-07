"use client"
import { useContext } from "react"

import { MediaDevices} from "@/app/Providers/MediaDevices"
export default function JoinMeet() {
    const MediaDevice = useContext(MediaDevices)


    let VideoInputList = MediaDevice.videoDevices.map(item => <option value={item.id}>{item.label}</option>)

    let AudioInputList = MediaDevice.audioDevices.map(item => <option className="w-10" value={item.id}>{item.label}</option>)
        console.log(MediaDevice, VideoInputList)
    return  <div className="flex justify-center my-20 w-3/5 m-auto align-middle">
        <form className="flex flex-col md:flex-row justify-center md:justify-evenly w-full items-center">
        <select className="select select-bordered text-center w-full max-w-xs py-2" required>
  <option disabled selected>Choose Camera</option>
        {VideoInputList}
</select>        <select className="select select-bordered w-full text-center max-w-xs py-2" required>
  <option disabled selected>Choose Microphone</option>
        {AudioInputList}
</select></form>
  </div> 
}