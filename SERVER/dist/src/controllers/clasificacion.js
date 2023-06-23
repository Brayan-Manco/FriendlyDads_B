"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClasificacion = exports.newClasificacion = void 0;
const tbl_clasificacion_1 = require("../models/tbl_clasificacion");
const newClasificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clasificacion, descripcion } = req.body;
    let foto = "";
    if (req.file) {
        foto = req.file.filename;
    }
    const clasificacionExist = yield tbl_clasificacion_1.Clasificacion.findOne({ where: { clasificacion: clasificacion } });
    if (clasificacionExist) {
        return res.status(400).json({
            msg: `Ya existe la clasificacion ${clasificacion}`
        });
    }
    try {
        yield tbl_clasificacion_1.Clasificacion.create({
            clasificacion: clasificacion,
            descripcion: descripcion,
            foto: foto
        });
        res.json({
            msg: 'Clasificacion creada correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE CLASI', error
        });
    }
});
exports.newClasificacion = newClasificacion;
const getClasificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listClasificacion = yield tbl_clasificacion_1.Clasificacion.findAll();
    res.json({ listClasificacion });
});
exports.getClasificacion = getClasificacion;
