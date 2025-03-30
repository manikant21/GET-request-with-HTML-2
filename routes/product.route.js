import { Router } from "express";
import {getProducts} from "../controller/product.controller.js"


const router = Router();

router.get("/", getProducts);

export {router};