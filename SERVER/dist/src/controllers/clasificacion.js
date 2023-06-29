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
exports.deleteClasi = exports.getIdClasi = exports.getClasi = exports.getClasificacion = exports.newClasificacion = void 0;
const tbl_clasificacion_1 = require("../models/tbl_clasificacion");
//crear
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
//obtener todos
const getClasificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listClasificacion = yield tbl_clasificacion_1.Clasificacion.findAll();
    res.json({ listClasificacion });
});
exports.getClasificacion = getClasificacion;
//obtener 
const getClasi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listClasi = yield tbl_clasificacion_1.Clasificacion.findAll({ attributes: ['id_clasificacion', 'clasificacion'] });
    res.json({ listClasi });
});
exports.getClasi = getClasi;
//obtener por el id
const getIdClasi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const id_clasi = yield tbl_clasificacion_1.Clasificacion.findByPk(id);
    if (id) {
        res.json(id_clasi);
    }
    else {
        res.status(400).json({
            msg: 'Clasificacion no encontrada'
        });
    }
});
exports.getIdClasi = getIdClasi;
//eliminar
const deleteClasi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield tbl_clasificacion_1.Clasificacion.destroy({ where: { id_clasificacion: id } });
        res.json({
            msg: 'Clasificacion eliminada correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR DELETE CLASI', error
        });
    }
});
exports.deleteClasi = deleteClasi;
