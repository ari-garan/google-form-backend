import { JwtPayload } from "./interface";
import jwt from "jsonwebtoken"

export const generateAccessToken = (payload: JwtPayload): string => {
  const secret:string = process.env.JWT_SECRET!;
  return jwt.sign(payload, secret, { expiresIn:"2h" });
};