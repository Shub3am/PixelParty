"use client"
import { useEffect, useState } from "react";

export default function CreateMeet() {
    const [sockets, setSocket] = useState([])
    const [email, setEmail] = useState([])
    useEffect(()=> {


    }, [])
    return <div><section className="bg-white dark:bg-gray-900">
    <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Want to connect with someone?</h1>
        <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Create a Meeting Below with the best privacy-centric Conferencing App!</p>

        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input id="email" type="text" onChange={(e)=> setEmail(e.target.value)} className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Enter Your Email Id"/>

            <button onClick={()=> { sockets.emit("newMeet", {roomId: sockets.id, name: email})}} className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Create Meeting
            </button>
        </div>
    </div>
</section></div>
}