import  { Router } from 'express'
import { getCuenta, loginUser, newCuenta } from '../controllers/cuenta';
import validateToken from './validator-token';


const router = Router();


router.get('/', getCuenta)

router.post('/', newCuenta)

router.post('/login', loginUser)

export default router;