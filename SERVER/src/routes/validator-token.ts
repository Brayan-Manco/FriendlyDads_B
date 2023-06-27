import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']


    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        // Tiene token
        try {
            const bearerToken = headerToken.slice(7); // .slice es que empieza despues del numero que 
            //se coloque dentro de los ()
            jwt.verify(bearerToken,  process.env.SECRET_KEY || 'admin123'); //verifica el token y se firma con 
            // conestra contraseña secreta
            next() //next significa que continua
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

//find

export default validateToken;