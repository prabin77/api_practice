const http = require ("http");
const app = require ("./config/app")

const server = http.createServer(app)

server.listen(3005, 'localhost',(err) => {
    if(!err){
        console.log("Server is running on port 3005 ")
        console.log("press CRTL+C to terminate")
    }
})