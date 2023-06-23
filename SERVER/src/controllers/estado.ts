import { Request, Response  } from "express";
import { Estado } from '../models/tbl_estado';


export const newEstado = async(req: Request, res: Response)=>{

    const {estado} = req.body;

    const estadoExist = await Estado.findOne({where : {estado: estado}});

    if(estadoExist){
        return res.status(400).json({
            msg:'El estado ya existe'
        })
    }

    try {
        await Estado.create({
            estado: estado
        })
        res.json({
            msg: 'Estado creado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE STATUS',error
        })
    }
}

export const getEstado = async(req: Request, res: Response)=>{
    const listEsatdo = await Estado.findAll();

    res.json({listEsatdo})
}