import {Request, Response} from 'express'
import { Informacion } from '../models/tbl_informacion'
import { Op } from 'sequelize';


//crear 
export const newInfo = async(req: Request, res: Response)=>{

    const {fk_id_clasificacion,fk_id_admin, nombre, descripcion} = req.body;

    let doc ="";
    if(req.file){
        doc = req.file.filename;
    }
    try {
        await Informacion.create({
            archivo: doc,
            fk_id_clasificacion: fk_id_clasificacion,
            descripcion: descripcion,
            fk_id_admin: fk_id_admin,
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


//obtener
export const getInformacion = async (req: Request, res: Response )=>{
    const listInfo = await Informacion.findAll();

    res.json(listInfo)
}


//consult
export const getConsult = async (req: Request, res:Response)=>{

    const {search } = req.body;

    try {
        const resultados = await Informacion.findAll({where: { nombre: {
            [Op.like]: `%${search}%`
            }
        }
    });
    res.json(resultados);
  } catch (error) {
    console.error('Error al ejecutar la consulta: ' + error);
  }
}


//actualizar 
export const updteInfo = async (req: Request, res:Response)=>{

    const {id_info, fk_id_clasificacion,fk_id_admin, nombre, descripcion} = req.body;

    let doc ="";
    if(req.file){
        doc = req.file.filename;
    }
    try {
        await Informacion.update({
            archivo: doc,
            fk_id_clasificacion: fk_id_clasificacion,
            descripcion: descripcion,
            fk_id_admin: fk_id_admin,
            nombre:nombre
        },{where: {id_info: id_info}, returning: true})

        res.json({
            msg:'Contenido actualializado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR ACTUALIZAR CONTENIDO',error
        })
    }
}

// export const deleteInfo = async(req:Request, res:Response)=>{
//     const {id_info} = req.body;

//     try{
//         await Informacion.delete({

//         })
//     }catch (error){
//         console.error('Error al eliminar la información');
//     }
// }


