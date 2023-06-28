import { Request, Response } from "express";
import { Tipo_doc } from "../models/tbl_tipo_doc";

export const newTipoD = async (req:Request, res: Response)=>{

    const {tipo_doc, siglas} = req.body;

    const tipoDocExist = await Tipo_doc.findOne({where: {tipo_doc: tipo_doc}});
    const siglaExist = await Tipo_doc.findOne({where: {tipo_doc: tipo_doc}});

    if(tipoDocExist){
        return res.status(400).json({
            msg: 'ya existe el documento'
        })
    }

    if(siglaExist){
        return res.status(400).json({
            msg: 'ya existe la sigla'
        })
    }

    try {
        await Tipo_doc.create({
            tipo_doc: tipo_doc,
            siglas: siglas
        })
        res.json({
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