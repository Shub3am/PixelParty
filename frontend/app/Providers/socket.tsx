import { createContext, useContext } from "react";

export const Socket = createContext([])

export function useSocket() {
    let connection = useContext(Socket)
    return connection
}
