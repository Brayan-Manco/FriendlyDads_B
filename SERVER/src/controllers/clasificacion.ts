import { Request, Response } from "express";
import { Clasificacion } from "../models/tbl_clasificacion";


export const newClasificacion =async (req: Request,res:Response) => {
    
    const {clasificacion, descripcion} = req.body;

    let foto = "";
    if (req.file) {
        foto = req.file.filename;
    }

    const clasificacionExist = await Clasificacion.findOne({where: {clasificacion: clasificacion}});

    if(clasificacionExist){
        return res.status(400).json({
            msg: `Ya existe la clasificacion ${clasificacion}`
        })
    }

    try {
        await Clasificacion.create({
            clasificacion: clasificacion,
            descripcion: descripcion,
            foto: foto
        })
        res.json({
            msg: 'Clasificacion creada correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE CLASI',error
        })
    }
}

export const getClasificacion = async(req: Request, res:Response)=>{

    const listClasificacion = await Clasificacion.findAll();
    res.json({listClasificacion})
}