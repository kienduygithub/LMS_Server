import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
const cartRouter = express.Router();


cartRouter.get("/get-cart", isAutheticated,);

// cartRouter.put("/add-cart", isAutheticated, getOrderAnalytics);



export default cartRouter;