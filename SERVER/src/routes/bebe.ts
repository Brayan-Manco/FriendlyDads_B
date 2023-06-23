import { Router } from "express";
import validateToken from "./validator-token";
import { getBebes, newBebe } from "../controllers/bebe";


const router = Router();

router.post('/',newBebe)

router.get('/', validateToken, getBebes);

export default router;