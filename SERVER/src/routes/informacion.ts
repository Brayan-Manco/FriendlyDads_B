import { Router } from 'express'
import { getConsult, getInformacion, newInfo, updteInfo } from '../controllers/informacion';
import validateToken from './validator-token';
import { uploadDocs } from '../models/docsMulter';

const router = Router();

router.post('/update',uploadDocs.single("doc"), updteInfo)

router.post('/create',uploadDocs.single("doc"), newInfo);

router.get('/find', validateToken, getInformacion);

router.post('/search',getConsult);

export default router;