import { Router } from "express";
import validateToken from "./validator-token";
import { getBebes, newBebe,getOneBebe, deleteBebe} from "../controllers/bebe";


const router = Router();

router.post('/',validateToken,newBebe)

router.get('/',validateToken, getBebes);

//buscar el fk_id_usuario para obtener
router.get('/findForUser/:id',validateToken, getOneBebe)

router.delete('/deleteBebe/:id',validateToken, deleteBebe)

export default router;