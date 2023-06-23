import { Request, Response } from "express";
import { Tipo_doc } from "../models/tbl_tipo_doc";

export const newTipoD = async (req:Request, res: Response)=>{

    const {tipo_doc} = req.body;

    const tipoDocExist = await Tipo_doc.findOne({where: {tipo_doc: tipo_doc}});

    if(tipoDocExist){
        return res.status(400).json({
            msg: 'Hay existe el documento'
        })
    }

    try {
        await Tipo_doc.create({
            msg: 'Documento creado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE DOC'
        })
    }

}

export const getTipo_doc = async(req: Request, res: Response)=>{
    const listTipo_doc = await Tipo_doc.findAll();

    res.json(listTipo_doc)
}