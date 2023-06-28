import {Request, Response} from 'express'
import { Informacion } from '../models/tbl_informacion'
import { Op, and } from 'sequelize';
import { Clasificacion } from '../models/tbl_clasificacion';
import { Administrador } from '../models/tbl_administrador';


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

    const listInfo = await Informacion.findAll({
        include: [
            { model: Clasificacion, attributes:['clasificacion']}, 
            { model:Administrador, attributes: ['nombres']}]
    });

    res.json(listInfo)
}

//obtener por id
export const getIdInfo = async (req: Request, res:Response)=>{
    const {id} = req.params;

    const Info = await Informacion.findByPk(id);


    // try {
        if(Info) {
            res.json(Info);
        }else{
            res.status(404).json({
                msg: 'No se encontro informacion por el id '
            })
        }
    // } catch (error) {

    //     res.status(400).json({
    //         msg: 'ERROR FIND INFO'
    //     })

    // }
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

    const {id} = req.params;
    const {fk_id_clasificacion,fk_id_admin, nombre, descripcion} = req.body;

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
        },{where: {id_info: id}, returning: true})

        res.json({
            msg:'Contenido actualializado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR ACTUALIZAR CONTENIDO',error
        })
    }
}


//delete
export const deleteInfo = async(req:Request, res:Response)=>{
    const {id} = req.params;

    try{
        
        await Informacion.destroy({where: {id_info : id}})
        res.json({ 
            mesg: 'Infomacion borrada correctamente'
        })

    }catch (error){
        res.status(400).json({
            msg: 'ERROR DELETE INFO',
        })
    }
}


