import  { Router } from 'express'
import { getCuenta, loginUser, newCuenta,FindUser } from '../controllers/cuenta';
import validateToken from './validator-token';


const router = Router();


router.get('/',validateToken, getCuenta)

router.post('/', newCuenta)

router.post('/login', loginUser)

router.get('/finUser/:id', FindUser)


export default router;