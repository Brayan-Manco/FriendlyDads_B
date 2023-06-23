import { Router } from 'express'
import { getInformacion, newInfo } from '../controllers/informacion';
import validateToken from './validator-token';
import { uploadDocs } from '../models/docsMulter';

const router = Router();

router.post('/',uploadDocs.single("doc"), newInfo);

router.get('/', validateToken, getInformacion);

export default router;