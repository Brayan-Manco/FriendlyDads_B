import validateToken from "./validator-token";
import Router from 'express';
import { newAdmin, getAdmin } from '../controllers/administrador';
import { getUploadedFile, upload } from "../models/configMulter";

const router = Router();

router.get("/", getAdmin);

// Ruta para crear un nuevo administrador


router.post('/', upload.single('foto'), newAdmin);

export default router;
