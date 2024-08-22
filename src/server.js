import express from "express"
import {config} from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).send({massage: "Hello, World!"})
}) 

app.listen( port, () => {
    console.log(`👾 sever started to http://localhost:${port}`)
})