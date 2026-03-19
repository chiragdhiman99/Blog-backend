const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"])
const app = express()
const port = process.env.PORT || 5000


app.use(cors({
  origin: process.env.CLIENT_URL
}))

app.use(express.json())
app.use(cors())

connectDB()

app.use("/api/auth", require("./routes/authroutes"))
app.use("/api/posts", require("./routes/postroutes"))
app.use("/api/users", require("./routes/userroutes"))


app.listen(port, () => {
  console.log("Server running on port " + port)
})