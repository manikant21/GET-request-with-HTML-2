import path from "path";
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getProducts = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, ".." , "view", "product.view.html"));
}

const postProduct = (req,res) => {
    const data = req.body;
    // console.log(data);

    res.status(201).json({
        success:true,
        value: data.productName
    })
}

export {getProducts, postProduct};