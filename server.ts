import {v2 as cloudinary} from "cloudinary";
import http from "http";
import connectDB from "./utils/db";
import { initSocketServer } from "./socketServer";
import { app } from "./app";
require("dotenv").config();
const server = http.createServer(app);


//cấu hình cloudinary
cloudinary.config({
 cloud_name: process.env.CLOUD_NAME,
 api_key: process.env.CLOUD_API_KEY,
 api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);

// create server
server.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
    connectDB();
});

// import { app } from "./app";
// import http from "http";
// import connectDB from "./utils/db";
// import {v2 as cloudinary} from "cloudinary";
// import { initSocketServer } from "./socketServer";
// import { redis } from './utils/redis';
// require("dotenv").config();
// const server = http.createServer(app);


// //Cấu hình cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_SECRET_KEY,
//    });

// //Kiểm tra kết nối Cloudinary
// const checkCloudinaryConnection = async () => {
//     try {
//         const result = await cloudinary.api.ping();
//         console.log("Cloudinary đã kết nối thành công:", result);
//     }catch(error){
//         console.error("Cloudinary không kết nối thành công:", error);
//     }
// }

// initSocketServer(server);

// //Tạo server
// server.listen(process.env.PORT, () => {
//     console.log(`Server đã được kết nối với port ${process.env.PORT}`);
//     connectDB();
//     checkCloudinaryConnection();
//     redis
// });
