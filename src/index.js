import app from "./app";
import { GetExample } from "./services/ServiceExample";
process.env.TZ = "America/La_Paz";

const server = app.listen(app.get("port"), async ()=>{
    console.log(`Server on port ${app.get("port")}`);
});

const SocketIO = require('socket.io');
const io = SocketIO(server,{
    cors: {
        origin: "*",//Cambiar esto en produccion no????
        methods: ["GET", "POST", "UPDATE"]
    }
})

io.on('connection', async (socket) => {
    socket.on("alert:new", async (data)=>{
        GetExample().then(res => {
            io.sockets.emit("new", data);
        })
    });
})