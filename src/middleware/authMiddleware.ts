import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../common/interface";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      statusCode: 401,
      status: "error",
      message: "Unauthorized: No token provided or invalid format",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      status: "error",
      message: "Token missing",
    });
  }

  try {
    const secret = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secret) as JwtPayload;

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      statusCode: 403,
      status: "error",
      message: "Invalid or expired token",
    });
  }
};

export default authenticateJWT;