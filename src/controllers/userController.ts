import { Request, Response } from "express";
import { signUpService, loginService } from "../services/userService";
import { createUserSchema, loginUserSchema } from "../validations/validator";
import { Router } from "express";
import { MESSAGE } from "../common/constant";

const Route = Router();

Route.post("/signup", async (req: Request, res: Response) => {
    try {
        await createUserSchema.validateAsync(req.body);
        const user = await signUpService(req.body);
        res.status(user?.statusCode || 201).json(user);
    }
    catch (error: any) {
        res.status(400).json({
            statusCode: 400,
            status: MESSAGE.ERROR,
            message: error.message,
        })
    }
});

Route.post("/login", async (req: Request, res: Response) => {
    try {
        await loginUserSchema.validateAsync(req.body);
        const user = await loginService(req.body);
        res.status(user?.statusCode || 200).json(user);
    }
    catch (error: any) {
        res.status(400).json({
            statusCode: 400,
            status: MESSAGE.ERROR,
            message: error.message,
        })
    }
});

export default Route;