import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import adminRoutes from "./routes/adminRoute.js";
import songRoutes from "./routes/songRoute.js";
import albumRoutes from "./routes/albumRoute.js";
import statRoutes from "./routes/statRoute.js";
import { connectDB} from "./lib/db.js";
import { clerkMiddleware } from '@clerk/express';
import fileUpload from "express-fileupload";
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app= express();
const PORT = process.env.PORT;

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
));

app.use(express.json());// parses req.body

app.use(clerkMiddleware()); //adds auth to req object

app.use(fileUpload({
useTempFiles: true,
tempFileDir: path.join(__dirname, "tmp"),

createParentPath: true,
limits:{
    fileSize: 10 * 1024 * 1024,},

}));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs",songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.use((err ,req ,res, next) => {
    res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message});
})


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});