import type { User, ResponseTS } from "../common/interface";
import UserModel from "../models/User";
import bcrypt from "bcrypt";
import { MESSAGE } from "../common/constant";
import { generateAccessToken } from "../common/helper";

export const signUpService = async (data: User): Promise<ResponseTS> => {
  try {
    const existingUser = await UserModel.findOne({ email: data.email }).select("email");
    if (existingUser) {
      return {
        statusCode: 409,
        status: MESSAGE.ERROR,
        message: "Email already exists",
      };
    }

    data.password = await bcrypt.hash(data.password, 10);
    const createdUser = await UserModel.create(data);

    const token = generateAccessToken({ userId: createdUser._id.toString() }) 
    return {
      statusCode: 201,
      status: MESSAGE.SUCCESS,
      message: "User created successfully",
      data: { token:token },
    };
  } catch (error: any) {
    return {
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error.message || "Something went wrong on the server",
    };
  }
};

export const loginService = async (data: User): Promise<ResponseTS> => {
  try {
    const user = await UserModel.findOne({ email: data.email });
    if (!user) {
      return {
        statusCode: 404,
        status: MESSAGE.ERROR,
        message: "Email not found",
      };
    }

    if (!user.password) {
      return {
        statusCode: 400,
        status: MESSAGE.ERROR,
        message: "Password not set for this user",
      };
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) {
      return {
        statusCode: 401,
        status: MESSAGE.ERROR,
        message: "Incorrect password",
      };
    }

    const token = generateAccessToken({ userId: user._id.toString() })

    return {
      statusCode: 200,
      status: MESSAGE.SUCCESS,
      message: "User logged in successfully",
      data: { token:token },
    };
  } catch (error: any) {
    return {
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error.message || "Something went wrong on the server",
    };
  }
};
