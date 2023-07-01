import { Router } from "express";
import validateToken from "./validator-token";
import { getBebes, newBebe,getOneBebe, deleteBebe} from "../controllers/bebe";


const router = Router();

router.post('/',newBebe)

router.get('/', getBebes);

//buscar el fk_id_usuario para obtener
router.get('/findForUser/:id', getOneBebe)

router.delete('/deleteBebe/:id', deleteBebe)

export default router;