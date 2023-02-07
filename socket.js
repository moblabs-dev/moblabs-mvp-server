import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors:{
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

httpServer.listen(3001);

export {io, httpServer};