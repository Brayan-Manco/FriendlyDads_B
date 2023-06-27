import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']


    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        // Tiene token
        try {
<<<<<<< HEAD
            const bearerToken = headerToken.slice(7); // .slice es que empieza despues del numero que 
            //se coloque dentro de los ()
            jwt.verify(bearerToken,  process.env.SECRET_KEY || 'admin'); //verifica el token y se firma con 
            // conestra contraseña secreta
            next() //next significa que continua
=======
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');
            next()
>>>>>>> e2a9501b25ed24783f58392443080a1b9f7fb024
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

export default validateToken;