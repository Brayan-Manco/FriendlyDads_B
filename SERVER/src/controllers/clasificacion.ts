import { Request, Response } from "express";
import { Clasificacion } from "../models/tbl_clasificacion";

//crear
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

//obtener todos
export const getClasificacion = async(req: Request, res:Response)=>{

    const listClasificacion = await Clasificacion.findAll();
    res.json({listClasificacion})
}


//obtener por el id
export const getIdClasi =async (req: Request, res: Response) => {
    
    const {id} =req.params;
    

    const id_clasi = await Clasificacion.findByPk(id)

    if (id) {
        res.json(id_clasi)
    } else {
        res.status(400).json({
            msg: 'Clasificacion no encontrada'
        })
    }
}

//eliminar
export const deleteClasi =async (req: Request, res: Response) => {
    
    const {id} = req.params;

    try {
        await Clasificacion.destroy({where: {id_clasificacion: id}})
        res.json({
            msg: 'Clasificacion eliminada correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR DELETE CLASI',error
        })
    }
}