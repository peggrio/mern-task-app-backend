const dotenv = require("dotenv").config();
const express = require("express")
const connectDB = require("./config/connectDB")
const app = express()
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors")

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(
    {
        origin: ["http://localhost:3000",
            "https://task-app-1azx-api.onrender.com"]
    }
))
app.use("/api/tasks", taskRoutes)

//Routes
app.get("/", (req, res) => {
    res.send("<h2>Welcome to the Home page...</h2>")
});

const PORT = process.env.PORT || 5001

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
};

startServer();