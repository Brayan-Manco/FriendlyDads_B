import validateToken from "./validator-token";
import Router from 'express';
import { newAdmin, getAdmin, getAdminCreate } from '../controllers/administrador';
import { getUploadedFile, upload } from "../models/configMulter";

const router = Router();

router.get("/", getAdmin);

router.get("/create", getAdminCreate);

// Ruta para crear un nuevo administrador


router.post('/', upload.single('foto'), newAdmin);

export default router;
