import app from "./src/app";

const PORT = process.env.PORT || 5000;

//Start Listening
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});