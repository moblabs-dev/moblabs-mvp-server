import express from 'express';
import {io, httpServer} from './socket.js';
const app = express();
import cors from 'cors';
import dareRoutes from './routes/dare-routes.js';


app.use(cors);
app.use('/api', dareRoutes.routes);


io.on('connection', (socket) => {
    socket.on('JOIN_ROOM', (data) => {
        socket.join(data);
    });
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
});



