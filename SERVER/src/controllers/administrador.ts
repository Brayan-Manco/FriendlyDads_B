import { Response, Request } from "express";
import { Administrador } from "../models/tbl_administrador";
import { Tipo_doc } from "../models/tbl_tipo_doc";
import { Cuenta } from "../models/tbl_cuenta";


export const newAdmin = async(req:Request , res: Response)=>{

    const {nombres, apellidos, fk_id_tipo_doc, numero_i, edad, fk_id_cuenta} = req.body;

    let foto = "";
    if (req.file) {
        foto = req.file.filename;
        
    }

    //consulta si ya exite el documento y dueño de la cuenta
    const numeroExist = await Administrador.findOne({where: {numero_i : numero_i }})
    const fk_id_cuentaExist = await Administrador.findOne({where: { fk_id_cuenta: fk_id_cuenta}})

    if(numeroExist){
        return res.status(400).json({
            msg: `Ya existe el documento ${numero_i}`
        })
    }
    if(fk_id_cuentaExist){
        return res.status(400).json({
            msg: `Ya hay una cuenta asocida a ${fk_id_cuenta}`
        })
    }

    try {
        await Administrador.create({
            nombres: nombres,
            apellidos: apellidos,
            fk_id_tipo_doc: fk_id_tipo_doc,
            numero_i: numero_i,
            edad: edad,
            fk_id_cuenta: fk_id_cuenta,
            ruta_imagen: foto,
        });

        res.json({
            msg: 'Administraor Creado con existo',
        });
    } catch (error) {
        res.status(500).json({
            msg: "ERROR CREATE ADMIN",error
        });
    }
}

export const getAdminCreate = async (req: Request, res: Response )=>{

    const listClasi = await Administrador.findAll({attributes:['id_admin','nombres']});

    res.json(listClasi)
}



export const getAdmin = async (req: Request, res: Response)=>{
    //include sirve para poder extraer los datos por relaciones
    const listAdmin = await Administrador.findAll({include: [
        //modelo por relacion y el atriutes son los campos que se extraen de la relacion
        {model: Tipo_doc, attributes: ['tipo_doc']},
        {model: Cuenta, attributes: ['correo']}
    ]});

    res.json({listAdmin})
}