import { Response, Request } from "express";
import { Rol } from "../models/tbl_rol";
import { Tipo_doc } from '../models/tbl_tipo_doc';

export const newRol = async(req:Request, res:Response)=>{
    const {tipo_rol} = req.body;

    const tipo_rolExist = await Rol.findOne({where: {tipo_rol : tipo_rol}});

    if(tipo_rolExist){
        return res.status(400).json({
            msg: `El rol ${tipo_rol} ya existe`
        })
    }

    try {
        await Rol.create({
            tipo_rol: tipo_rol
        })
        res.json({
            msg: 'Rol creado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE ROL'
        })
    }
}

export const getRol = async(req: Request, res:Response)=>{
    const listRol = await Rol.findAll();

    res.json({listRol})
}