import { Router } from "express";
import { registerUser } from "../controllers/registerController.js";
import loginUser from "../controllers/usersControllers.js";

const usersRouter = Router();

usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);

export default usersRouter;
