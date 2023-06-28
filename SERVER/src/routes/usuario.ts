import { Router } from "express";
import validateToken from "./validator-token";
import { getUsuario, newUsuario } from "../controllers/usuario";
import { upload } from "../models/configMulter";

const router = Router();

router.post('/',upload.single('foto'),newUsuario);

router.get('/',getUsuario);

export default router;