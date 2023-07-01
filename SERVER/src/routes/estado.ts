import { Router } from "express";
import validateToken from "./validator-token";
import { getEstado, newEstado } from "../controllers/estado";

const router = Router();

router.post('/',newEstado);

router.get('/listEst', getEstado);

export default router;