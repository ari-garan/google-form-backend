import mongoose from "mongoose";

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/google_form";
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Server Connected")
    } catch (error: any) {
        console.error("Connection Error: ", error)
        process.exit(1);
    }
}

export default connectDB;