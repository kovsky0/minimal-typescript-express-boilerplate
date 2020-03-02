import express from "express"
import dotEnv from "dotenv"
dotEnv.config()

const app = express()
const port = 3000

app.post("/", (req, res) => {
  console.log("ready")
})

app.listen(port)
