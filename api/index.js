import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

//leer el archvivo .env
dotenv.config();

// conexion a la base de datos
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDb is connected");
    })
    .catch((err) => {
        console.log(err);
    });

// Inicializar el servidor
const app = express();

// Middleware
app.use(express.json());

// Configuracion del servidor
app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
