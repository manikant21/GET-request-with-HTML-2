import path from "path";
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getProducts = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, ".." , "view", "product.view.html"));
}

export {getProducts};