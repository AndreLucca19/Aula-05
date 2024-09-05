import express from "express"
import {config} from "dotenv"

import routes from "./routes/index.routes.js"

config()

const port = process.env.PORT || 3000

const app = express()
app.use(routes)
app.use(express.json())
app.listen( port, () => {
    console.log(`👾 sever started to http://localhost:${port}`)
})