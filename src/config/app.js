const express = require("express")
const router= require('../routes')

const app = express()


app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use("/api_practice/v1",router);

app.use((error, req , res , next) =>{
    console.log(error)
    let status = error.status|| 500;
    let msg = error.msg || "Internal Server Error"
})

module.exports = app