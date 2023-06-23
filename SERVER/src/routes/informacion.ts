import { Router } from 'express'
import { getConsult, getInformacion, newInfo } from '../controllers/informacion';
import validateToken from './validator-token';
import { uploadDocs } from '../models/docsMulter';

const router = Router();

router.post('/',uploadDocs.single("doc"), newInfo);

router.get('/', validateToken, getInformacion);

router.post('/search',getConsult);

export default router;