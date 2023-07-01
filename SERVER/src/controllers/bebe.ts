import { Request, Response } from "express";
import { Bebe } from "../models/tbl_bebe";
import { Usuario } from "../models/tbl_usuario";
import { Tipo_doc } from "../models/tbl_tipo_doc";


export const newBebe = async (req: Request, res: Response)=>{
    const {nombre_completo, fk_id_tipo_doc,numero_i, edad, fk_id_usuario} = req.body;

    const numeroExist = await Bebe.findOne({where: {numero_i: numero_i}})
    if(numeroExist){
        return res.status(400).json({
            msg: `Ya existe un usuario con el documento ${numero_i}`
        })
    }
    try {
        await Bebe.create({
            nombre_completo: nombre_completo,
            fk_id_tipo_doc: fk_id_tipo_doc,
            numero_i: numero_i,
            edad: edad,
            fk_id_usuario: fk_id_usuario
        })
        res.json({
            msg: 'Bebe agregado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE CHILB', error
        })
    }
}

export const getBebes = async(req: Request, res: Response)=>{
    const listBebes = await Bebe.findAll(
        {include: Usuario});

    res.json({listBebes})
}

export const getOneBebe = async (req: Request, res: Response) =>{

    const {id} = req.params;

    // const infoBebe = await Bebe.findOne({where: {fk_id_usuario: id}})
    const infoBebe = await Bebe.findAll({
        where: {fk_id_usuario: id},
        include: [
          { model: Usuario, attributes: ['id_usuario','nombres']},
          { model: Tipo_doc, attributes: ['id_tipo_doc','tipo_doc']}
        ]
      })
    res.json(infoBebe);
}


export const deleteBebe = async(req:Request, res:Response)=>{
    const {id} = req.params;

    try{
        
        await Bebe.destroy({where: {id_bebe : id}})
        res.json({ 
            mesg: 'Dato del bebe borrada correctamente'
        })

    }catch (error){
        res.status(400).json({
            msg: 'ERROR DELETE BEBE',
        })
    }
}