import {Request, Response} from 'express'
import { Informacion } from '../models/tbl_informacion'


export const newInfo = async(req: Request, res: Response)=>{

    const {fk_id_clasificacion,fk_id_admin, nombre} = req.body;

    let doc ="";
    if(req.file){
        doc = req.file.filename;
    }
    try {
        await Informacion.create({
            archivo: doc,
            fk_id_clasificacion: fk_id_clasificacion,
            fk_id_admin,
            nombre:nombre
        })

        res.json({
            msg:'Contenido subido correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR SUBIR CONTENIDO',error
        })
    }
}

export const getInformacion = async (req: Request, res: Response )=>{
    const listInfo = await Informacion.findAll();

    res.json(listInfo)
}