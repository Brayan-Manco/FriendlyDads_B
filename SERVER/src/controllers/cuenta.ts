import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Cuenta } from '../models/tbl_cuenta';
import jwt from 'jsonwebtoken';

export const newCuenta = async (req: Request, res: Response) => {
    
    //extraemos los datos necesarios de la solicitud (req.body), 
    //como el usuario,correo electrónico, la contraseñay el rol.
    const {usuario, correo, contrasena, fk_id_rol} = req.body;

    //el hash encripta la contraseña
    const hashedContrasena = await bcrypt.hash(contrasena, 10);

    //se hace la consulta si existe el usuario
    const usuarioExits = await Cuenta.findOne({where: { usuario: usuario}})

    //se hace la consulta si existe el correo
    const correoExist = await Cuenta.findOne({where: { correo: correo}})

    //se hace condicion si ya exite y retorna un mensaje si existe
    if(usuarioExits){
        return res.status(400).json({
            msg: `Usuario en uso`
        })
    }if(correoExist){
        return res.status(400).json({
            msg: `Correo en uso`
        })
    }
    try {
        //creamos una cuenta mediante el Cuenta.create
        await Cuenta.create({
            usuario: usuario,
            correo: correo,
            contrasena: hashedContrasena,
            fk_id_rol: fk_id_rol
        });
        //devuelve un mensaje de exito de la creacion de la cuenta
        //en fomarmato JSON utilizando la funcion res.json()
        res.json({
            msg: 'Usuario Creado',
        })
    } catch (error) {
        //devuelve un mensaje de error en la creacion de la cuenta
        //en fomarmato JSON utilizando la funcion res.json()
        res.status(400).json({
            msg: 'ERROR CREATE USER',error
        })
    }
}

export const getCuenta = async (req: Request, res: Response )=>{

    //se hace un consulda a base datos mediante mediante la funcion Cuenta.findAll()
    
    const listCuenta = await Cuenta.findAll();
    //se devuelve la lista de cuentas como respuesta en formato JSON utilizando 
    //la función res.json(). Esto envía la lista de cuentas al cliente que realizó la solicitud.
    res.json(listCuenta)
}


// export const loginUser = async (req: Request, res: Response) => {
//     const { correo, contrasena } = req.body;
  
//     try {
//       // Validamos si el usuario existe
//       const cuenta: any = await Cuenta.findOne({
//         where: { correo },
//         include: [{ model: Rol, as: 'rol' }]
//       });
//       if (!cuenta) {
//         return res.status(404).json({
//           msg: 'Correo Incorrecto'
//         });
//       }
  
//       // Validamos la contraseña
//       const contrasenaValida = await bcrypt.compare(contrasena, cuenta.contrasena);
  
//       if (!contrasenaValida) {
//         return res.status(400).json({
//           msg: 'Contraseña Incorrecta'
//         });
//       }
  
//       // Validamos el rol del usuario
//       if (cuenta.rol.nombre === 'admin') {
//         // Acciones para usuarios con rol de administrador
//         // ...
//       } else {
//         // Acciones para otros roles
//         // ...
//       }
  
//       // Generamos el token
//       const token = jwt.sign({ correo: cuenta.correo }, process.env.SECRET_KEY || 'admin');
  
//       res.json({ token });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         msg: 'Error en el servidor'
//       });
//     }
//   };


export const loginUser = async (req: Request, res: Response) => {

    //extraemos los datos necesarios de la solicitud (req.body), 
    //como el correo electrónico y la contraseña.
    const {correo, contrasena} = req.body;

    //validamos  si el usuario existe
    const correoExist: any = await Cuenta.findOne({where: { correo: correo}})

    //se devuelve un mensaje de error en formato JSON utilizando 
    //la función res.json(). 
    if(!correoExist){
        return res.status(404).json({
            msg: 'Correo Incorrecto'
        })
    }
    //Utilizando la función bcrypt.compare, comparamos la contraseña proporcionada con la 
    //contraseña almacenada en la base de datos (correoExist.contrasena). Esta función compara 
    //las dos contraseñas y devuelve un valor booleano que indica si son iguales o no.
    const contrasenaValid = await bcrypt.compare(contrasena, correoExist.contrasena);

    //retorna un mensaje si la contraseña es incorrecta
    if(!contrasenaValid){
        return res.status(400).json({
            msg: 'Contraseña Incorrecta'
        })
    }

    const datos = await Cuenta.findOne({where: {correo : correo},
        attributes: ['fk_id_rol']
    })
    //Si la contraseña es válida, se genera un token de autenticación utilizando la 
    //biblioteca jsonwebtoken (jwt.sign). 

    const token = jwt.sign({
        correo: correo
    }, process.env.SECRET_KEY || 'admin');


    //se devuelve una respuesta JSON que contiene el token generado.
    res.json({token, datos});
}
