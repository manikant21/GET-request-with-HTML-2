import { Router } from "express";
import {getProducts, postProduct} from "../controller/product.controller.js"


const router = Router();

router.get("/", getProducts);
router.post("/", postProduct)

export {router};