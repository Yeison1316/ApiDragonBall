import express from "express"
import routerIndex from "../router/index.routers.js"
import cors from "cors"

export default class Server{

    constructor(){
        this.app = express()
        this.port = 8080
    }

    middleware(){
        const corsOptions = {
            origin : "*",
            methods: ["GET"]
        };
        this.app.use(cors(corsOptions));
    }

    router(){   
        this.app.use(routerIndex)
    }

    runApp(){
        this.middleware()
        this.router()
        this.app.listen(this.port, ()=>{
            console.log("Estoy en el puerto" +" "+ this.port)
        })
    }
}