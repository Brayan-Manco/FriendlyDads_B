import { Router } from "express";
import validateToken from "./validator-token";
import { deleteClasi, getClasi, getClasiAll, getIdClasi, newClasificacion, updateClasi } from "../controllers/clasificacion";
import { upload } from "../models/configMulter";

const router = Router();

router.delete('/delete/:id',validateToken, deleteClasi)

router.post('/',validateToken,upload.single('foto'), newClasificacion);

router.get('/findClasi',validateToken, getClasi);

router.get('/find',validateToken, getClasiAll);

router.get('/find/:id',validateToken, getIdClasi);

router.put('/update/:id',validateToken, upload.single('foto'), updateClasi);

export default router;
