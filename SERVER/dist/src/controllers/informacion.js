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
exports.deleteInfo = exports.selectOneInfo = exports.selectInfo = exports.updteInfo = exports.getConsult = exports.getFileUpdate = exports.getIdInfo = exports.getInformacion = exports.newInfo = void 0;
const tbl_informacion_1 = require("../models/tbl_informacion");
const sequelize_1 = require("sequelize");
const tbl_clasificacion_1 = require("../models/tbl_clasificacion");
const tbl_administrador_1 = require("../models/tbl_administrador");
//crear 
const newInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { informacion, fk_id_clasificacion, fk_id_admin, nombre, descripcion } = req.body;
    // let doc ="";
    // if(req.file){
    //     doc = req.file.filename;
    // }
    try {
        yield tbl_informacion_1.Informacion.create({
            // archivo: doc,
            informacion: informacion,
            fk_id_clasificacion: fk_id_clasificacion,
            fk_id_admin: fk_id_admin,
            nombre: nombre,
            descripcion: descripcion,
        });
        res.json({
            msg: 'Contenido subido correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR SUBIR CONTENIDO', error
        });
    }
});
exports.newInfo = newInfo;
//obtener
const getInformacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listInfo = yield tbl_informacion_1.Informacion.findAll({
        include: [
            { model: tbl_clasificacion_1.Clasificacion, attributes: ['clasificacion'] },
            { model: tbl_administrador_1.Administrador, attributes: ['nombres'] }
        ]
    });
    res.json(listInfo);
});
exports.getInformacion = getInformacion;
//obtener por id
const getIdInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Info = yield tbl_informacion_1.Informacion.findByPk(id);
    // try {
    if (Info) {
        res.json(Info);
    }
    else {
        res.status(404).json({
            msg: 'No se encontro informacion por el id '
        });
    }
    // } catch (error) {
    //     res.status(400).json({
    //         msg: 'ERROR FIND INFO'
    //     })
    // }
});
exports.getIdInfo = getIdInfo;
const getFileUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listInfo = yield tbl_informacion_1.Informacion.findByPk((id), { attributes: ['nombre', 'descripcion'],
        include: [
            { model: tbl_clasificacion_1.Clasificacion, attributes: ['id_clasificacion', 'descripcion'] },
            { model: tbl_administrador_1.Administrador, attributes: ['id_admin', 'nombres'] }
        ] });
    res.json(listInfo);
});
exports.getFileUpdate = getFileUpdate;
//consult
const getConsult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.body;
    try {
        const resultados = yield tbl_informacion_1.Informacion.findAll({ where: { nombre: {
                    [sequelize_1.Op.like]: `%${search}%`
                }
            }
        });
        res.json(resultados);
    }
    catch (error) {
        console.error('Error al ejecutar la consulta: ' + error);
    }
});
exports.getConsult = getConsult;
//actualizar 
const updteInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { fk_id_clasificacion, fk_id_admin, nombre, descripcion, informacion } = req.body;
    // let doc ="";
    // if(req.file){
    //     doc = req.file.filename;
    // }
    try {
        yield tbl_informacion_1.Informacion.update({
            // archivo: doc,
            fk_id_clasificacion: fk_id_clasificacion,
            descripcion: descripcion,
            fk_id_admin: fk_id_admin,
            nombre: nombre,
            informacion: informacion
        }, { where: { id_info: id }, returning: true });
        res.json({
            msg: 'Contenido actualializado correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR ACTUALIZAR CONTENIDO', error
        });
    }
});
exports.updteInfo = updteInfo;
const selectInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ListClasificacion = yield tbl_informacion_1.Informacion.findAll({ where: { fk_id_clasificacion: id },
        attributes: ['id_info', 'nombre', 'descripcion'],
        include: { model: tbl_administrador_1.Administrador, attributes: ['nombres'] } });
    res.json(ListClasificacion);
});
exports.selectInfo = selectInfo;
const selectOneInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const info = yield tbl_informacion_1.Informacion.findOne({ where: { id_info: id }, attributes: ['nombre', 'informacion'] });
    res.json(info);
});
exports.selectOneInfo = selectOneInfo;
//delete
const deleteInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield tbl_informacion_1.Informacion.destroy({ where: { id_info: id } });
        res.json({
            mesg: 'Infomacion borrada correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR DELETE INFO',
        });
    }
});
exports.deleteInfo = deleteInfo;
