import { Router } from "express";
import validateToken from "./validator-token";
import { deleteClasi, getClasi, getClasificacion, getIdClasi, newClasificacion } from "../controllers/clasificacion";
import { upload } from "../models/configMulter";


const router = Router();

router.delete('/delete/:id', deleteClasi)

router.post('/',upload.single('foto'), newClasificacion);

router.get('/findClasi', getClasi);

router.get('/find', getClasificacion);

router.get('/find/:id', getIdClasi);

export default router;
