import { Router } from "express";
import validateToken from "./validator-token";
import { deleteClasi, getClasi, getClasiAll, getIdClasi, newClasificacion, updateClasi } from "../controllers/clasificacion";
import { upload } from "../models/configMulter";

const router = Router();

router.delete('/delete/:id',validateToken, deleteClasi)

router.post('/',validateToken,newClasificacion);

router.get('/findClasi',validateToken, getClasi);

router.get('/find',validateToken, getClasiAll);

router.get('/find/:id',validateToken, getIdClasi);

export default router;
