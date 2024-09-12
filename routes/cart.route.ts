import express from "express";
import { isAutheticated } from "../middleware/auth";
import { getCartOfUser } from "../controllers/cart.controller";
const cartRouter = express.Router();


cartRouter.get("/get-cart", isAutheticated, getCartOfUser);

// cartRouter.put("/add-cart", isAutheticated, getOrderAnalytics);



export default cartRouter;