import { Request, Response } from "express";
import { Usuario } from "../models/tbl_usuario";
import { Parentesco } from "../models/tbl_parentesco";
import { Estado } from "../models/tbl_estado";
import { Tipo_doc } from "../models/tbl_tipo_doc";
import { Cuenta } from "../models/tbl_cuenta";


export const newUsuario = async(req:Request, res:Response)=>{

    const {fk_id_paren, fk_id_estado, nombres, apellidos, fk_id_tipo_doc, numero_i , edad, fk_id_cuenta} = req.body;

    // let foto = "";
    // if (req.file) {
    //     foto = req.file.filename;
    // }
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
            // ruta_imagen: foto,
        })
        res.json({
            msg: 'Usuario creado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE USER',error
        })
    }

}

export const UpdateUsuario = async(req:Request, res:Response)=>{

    const {id} = req.params;

    const {fk_id_paren, fk_id_estado, nombres, apellidos, fk_id_tipo_doc, numero_i , edad} = req.body;

    const numeroExist = await Usuario.findOne({where: {numero_i: numero_i}});

    if(numeroExist){
        return res.status(400).json({
            msg: 'El documento ya esta asociado a otro usuario'
        })
    }

    try {
        await Usuario.update({
            fk_id_paren: fk_id_paren,
            fk_id_estado: fk_id_estado,
            nombres: nombres,
            apellidos: apellidos,
            fk_id_tipo_doc: fk_id_tipo_doc,
            numero_i: numero_i,
            edad: edad
            // ruta_imagen: foto,
        },{where :{id_usuario: id}, returning: true})
        res.json({
            msg: 'Usuario actualizado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'ERROR UPDATE USER',error
        })
    }

}

export const getUsuario = async(rep: Request, res: Response) =>{
    const listUsuario = await Usuario.findAll();

    res.json(listUsuario)
}



export const getUserFindOne =async (req:Request, res: Response) => {

    const {id} = req.params; 

    const listUser = await Usuario.findOne({where:{fk_id_cuenta: id}, attributes: ['id_usuario','nombres','apellidos','numero_i','edad','fk_id_cuenta'],
        include: [
            {model: Parentesco , attributes: ['id_paren', 'parentesco']},
            {model: Estado , attributes: ['id_estado', 'estado']},
            {model: Tipo_doc , attributes: ['id_tipo_doc', 'tipo_doc']},
            {model: Cuenta , attributes: ['id_cuenta','correo', 'usuario']}
        ]});

    res.json(listUser);
}

export const updateTime =async (req:Request, res:Response) => {
    

    const {id}= req.params;
    const {vez} = req.body;

    
    await Cuenta.update({
        primera_vez: vez
    },{where: {id_cuenta: id}})

    res.json('estado actualizado')
}

export const getIfExist =async (req:Request, res: Response) => {

    const {id} = req.params;
    
    const ifExistUser = await Usuario.findOne({where: {fk_id_cuenta: id}})

    if(ifExistUser){
        res.json('ya existe')
    }else{
        res.json('no existe')
    }
}




