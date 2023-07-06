import { Router } from "express";
import validateToken from "./validator-token";
import { getTipo_doc, newTipoD } from "../controllers/tipo_doc";

const router = Router();

router.post('/new', newTipoD)

router.get('/obtener',validateToken, getTipo_doc);

export default router;