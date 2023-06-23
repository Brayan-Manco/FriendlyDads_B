import { Router } from "express";
import validateToken from "./validator-token";
import { getRol, newRol } from "../controllers/rol";


const router = Router();

router.post('/', newRol);

router.get('/', validateToken, getRol);

export default router;