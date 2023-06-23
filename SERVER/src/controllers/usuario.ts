import { Request, Response } from "express";
import { Usuario } from "../models/tbl_usuario";


export const newUsuario = async(req:Request, res:Response)=>{

    const {fk_id_paren, fk_id_estado, nombres, apellidos, fk_id_tipo_doc, numero_i , edad, fk_id_cuenta} = req.body;

    let foto = "";
    if (req.file) {
        foto = req.file.filename;
    }
    const numeroExist = await Usuario.findOne({where: {numero_i: numero_i}});
    const fk_id_cuentaExist = await Usuario.findOne({where: { fk_id_cuenta: fk_id_cuenta}})

    if(numeroExist){
        return res.status(400).json({
            msg: 'El documento ya esta asociado a otro usuario'
        })
    }
    if(fk_id_cuentaExist){
        return res.status(400).json({
            msg: `ya hay una cuenta asocida a ${fk_id_cuenta}`
        })
    }

    try {
        await Usuario.create({
            fk_id_paren: fk_id_paren,
            fk_id_estado: fk_id_estado,
            nombres: nombres,
            apellidos: apellidos,
            fk_id_tipo_doc: fk_id_tipo_doc,
            numero_i: numero_i,
            edad: edad,
            fk_id_cuenta: fk_id_cuenta,
            ruta_imagen: foto,
        })
        res.json({
            msg: 'Usuario creado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE USER'
        })
    }

}

export const getUsuario = async(rep: Request, res: Response) =>{
    const listUsuario = await Usuario.findAll();

    res.json(listUsuario)
}