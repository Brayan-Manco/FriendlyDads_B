import { Router } from "express";
import validateToken from "./validator-token";
import { getUsuario, newUsuario, getUserFindOne,getIfExist,UpdateUsuario, updateTime } from "../controllers/usuario";
import { upload } from "../models/configMulter";

const router = Router();

// router.post('/create',upload.single('foto'),newUsuario);
router.post('/create',validateToken, newUsuario);

router.put('/estado/:id',validateToken, updateTime);

router.get('/',validateToken,getUsuario);

router.put('/update/:id',validateToken,UpdateUsuario);

router.get('/findUserOne/:id',validateToken, getUserFindOne);

router.get('/ifExist/:id',validateToken,  getIfExist);

export default router;