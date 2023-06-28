import { Router } from 'express'
import { deleteInfo, getConsult, getIdInfo, getInformacion, newInfo, updteInfo } from '../controllers/informacion';
import validateToken from './validator-token';
import { uploadDocs } from '../models/docsMulter';

const router = Router();

router.put('/update/:id',uploadDocs.single("doc"), updteInfo)

router.post('/create',uploadDocs.single("doc"), newInfo);

router.get('/find', getInformacion);

router.post('/search',getConsult);

router.post('/find/:id', getIdInfo)

router.delete('/delete/:id', deleteInfo);

export default router;