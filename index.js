import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js"; 
import usersRoute from "./api/routes/users.js"; 
import roomsRoute from "./api/routes/rooms.js"; 
import hotelsRoute from "./api/routes/hotels.js"; 

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    } catch (error) {
        throw(error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log('MongoDB Disconnected');
})

mongoose.connection.on("connected", () => {
    console.log('MongoDB Connected');
})

// middlewares 
app.use(express.json());
app.use("/api/auth" , authRoute);
app.use("/api/users" , usersRoute);
app.use("/api/hotels" , hotelsRoute);
app.use("/api/rooms" , roomsRoute);




app.listen(8800 , ()=>{
    connect();
    console.log("Connected to Backend");
})