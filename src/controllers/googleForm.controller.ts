import { Router } from "express";
import { MESSAGE } from "../common/constant";
import { Request, Response } from "express";
import {
  createService,
  submitService,
  getFormService,
  getSubmittedResponseService,
  getFormIdService,
} from "../services/googleFormService";

const route = Router();

route.post("/create", async (req: Request, res: Response) => {
  try {
    const result = await createService(req.body);
    return res.status(result?.statusCode || 201).json(result);
  } catch (error: any) {
    console.error("Error: ", error?.message);
    return res.status(400).json({
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    });
  }
});

route.post("/submit/:formId", async (req: Request, res: Response) => {
  try {
    const result = await submitService(req.params.formId, req.body);
    return res.status(result?.statusCode || 200).json(result);
  } catch (error: any) {
    console.error("Error: ", error?.message);
    return res.status(400).json({
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    });
  }
});

route.get("/form-id", async (req: Request, res: Response) => {
  try {
    const result = await getFormIdService();
    return res.status(result?.statusCode || 200).json(result);
  } catch (error: any) {
    console.error("Error: ", error?.message);
    return res.status(400).json({
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    });
  }
});

route.get("/get-form/:formId", async (req: Request, res: Response) => {
  try {
    
    const result = await getFormService(req.params.formId);
    console.log(result)
    return res.status(result?.statusCode || 200).json(result);
  } catch (error: any) {
    console.error("Error: ", error?.message);
    return res.status(400).json({
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    });
  }
});

route.get("/get-response/:formId", async (req: Request, res: Response) => {
  try {
    const result = await getSubmittedResponseService(req.params.formId);
    return res.status(result?.statusCode || 200).json(result);
  } catch (error: any) {
    console.error("Error: ", error?.message);
    return res.status(400).json({
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    });
  }
});

export default route;
