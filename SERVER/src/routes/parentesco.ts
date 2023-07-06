import { Router } from 'express'
import { getParen, newParen } from '../controllers/parentesco';
import validateToken from './validator-token';

const router = Router();

router.post('/', newParen);

router.get('/listParen',validateToken, getParen);

export default router;