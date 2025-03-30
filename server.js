import  express from "express";
import dotenv from "dotenv";
import {router as productRouter} from "./routes/product.route.js"


dotenv.config();


const app = express();

app.use(express.static("public"));
app.use(express.json())

app.use("/api/products", productRouter);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})