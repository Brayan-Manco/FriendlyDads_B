import { Router } from 'express'
import { deleteInfo, getConsult, getFileUpdate, getIdInfo, getInformacion, newInfo, updteInfo } from '../controllers/informacion';
import validateToken from './validator-token';
import { uploadDocs } from '../models/docsMulter';

const router = Router();

// router.put('/update/:id', validateToken, uploadDocs.single("doc"), updteInfo)
router.put('/update/:id',validateToken, updteInfo)

// router.post('/create',uploadDocs.single("doc"), newInfo);
router.post('/create',validateToken, newInfo);

router.get('/find', validateToken, getInformacion);

router.get('/findOneUpdate/:id', getFileUpdate);

router.post('/search', validateToken,getConsult);

router.post('/find/:id', validateToken, getIdInfo)

router.delete('/delete/:id', validateToken, deleteInfo);

export default router;