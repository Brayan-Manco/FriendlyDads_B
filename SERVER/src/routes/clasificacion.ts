import { Router } from "express";
import validateToken from "./validator-token";
import { getClasificacion, newClasificacion } from "../controllers/clasificacion";
import { upload } from "../models/configMulter";


const router = Router();

router.post('/',upload.single('foto'), newClasificacion);

router.get('/', validateToken, getClasificacion);

export default router;
