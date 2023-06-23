import {Request, Response} from 'express'
import { Parentesco } from '../models/tbl_parentesco';

export const newParen = async(req: Request, res: Response)=>{
    
    const {parentesco} = req.body;

    const parentescoExist = await Parentesco.findOne({where: {parentesco: parentesco}})

    if(parentescoExist){
        return res.status(400).json({
            msg: 'El parentesco ya existe'
        })
    }

    try {
        await Parentesco.create({
            parentesco: parentesco
        })
        res.json({
            msg: 'Parentesco creado correctamente'
        })
    } catch (error) {
        
    }
}

export const getParen = async (req: Request, res: Response )=>{
    const listParen = await Parentesco.findAll();

    res.json(listParen)
}