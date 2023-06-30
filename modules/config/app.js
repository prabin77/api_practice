const express = require("express")

const app = express()


app.use(express.json())

app.use((error, req , res , next) =>{
    console.log(error)
    let status = error.status|| 500;
    let msg = error.msg || "Internal Server Error"
})

module.exports = app