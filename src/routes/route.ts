import { Router } from "express";
import googleFormController from "../controllers/googleForm.controller"
import userController from "../controllers/userController";

const route =  Router();

route.use("/google-form",googleFormController);
route.use("/auth", userController)

export default route;