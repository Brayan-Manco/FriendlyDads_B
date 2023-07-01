import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']


    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        // Tiene token
        try {
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'admin');
            next()
        } catch (error) {
            res.status(401).json({
                msg: 'token no valido'
            })
        }

    } else {
        res.status(401).json({
            msg: 'Acceso denegado'
        })
    }

}

// const validateToken = (req: Request, res: Response, next: NextFunction) => {
//     const headerToken = req.headers['authorization'];
  
//     if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
//       // Tiene token
//       try {
//         const bearerToken = headerToken.slice(7);
//         const decodedToken: any = jwt.verify(
//           bearerToken,
//           process.env.SECRET_KEY || 'admin'
//         );
        
//         // Verificar el rol aquí
//         if (decodedToken.tipo_rol === 'admin') {
//           // El usuario tiene rol de administrador
//           next();
//         } else {
//           res.status(403).json({
//             msg: 'Acceso no autorizado',
//           });
//         }
//       } catch (error) {
//         res.status(401).json({
//           msg: 'Token no válido',
//         });
//       }
//     } else {
//       res.status(401).json({
//         msg: 'Acceso denegado',
//       });
//     }
//   };


export default validateToken;