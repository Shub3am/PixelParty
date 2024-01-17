import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer,{cors: true});

io.on("connection", (socket) => {
    socket.on("checkJoin", (data)=> { console.log(data, "front")})
    socket.on("newMeet", (data)=> {
        console.log(data)
        socket.join("heyy")
        console.log("Room Created with Id:", "heyy")
        console.log("User joined:", socket.id)
        socket.to("heyy").emit('newJoin', `User ${socket.id} joined`)
    })

});

httpServer.listen(8000);