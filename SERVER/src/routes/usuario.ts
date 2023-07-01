import { Router } from "express";
import validateToken from "./validator-token";
import { getUsuario, newUsuario, getUserFindOne,getIfExist } from "../controllers/usuario";
import { upload } from "../models/configMulter";

const router = Router();

router.post('/create',upload.single('foto'),newUsuario);

router.get('/',getUsuario);

router.get('/findUserOne/:id', getUserFindOne);

router.get('/ifExist/:id',  getIfExist)

export default router;