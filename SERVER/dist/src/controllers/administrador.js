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
exports.getAdmin = exports.getAdminCreate = exports.newAdmin = void 0;
const tbl_administrador_1 = require("../models/tbl_administrador");
const tbl_tipo_doc_1 = require("../models/tbl_tipo_doc");
const tbl_cuenta_1 = require("../models/tbl_cuenta");
const newAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, fk_id_tipo_doc, numero_i, edad, fk_id_cuenta } = req.body;
    let foto = "";
    if (req.file) {
        foto = req.file.filename;
    }
    //consulta si ya exite el documento y dueño de la cuenta
    const numeroExist = yield tbl_administrador_1.Administrador.findOne({ where: { numero_i: numero_i } });
    const fk_id_cuentaExist = yield tbl_administrador_1.Administrador.findOne({ where: { fk_id_cuenta: fk_id_cuenta } });
    if (numeroExist) {
        return res.status(400).json({
            msg: `Ya existe el documento ${numero_i}`
        });
    }
    if (fk_id_cuentaExist) {
        return res.status(400).json({
            msg: `Ya hay una cuenta asocida a ${fk_id_cuenta}`
        });
    }
    try {
        yield tbl_administrador_1.Administrador.create({
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
    }
    catch (error) {
        res.status(500).json({
            msg: "ERROR CREATE ADMIN", error
        });
    }
});
exports.newAdmin = newAdmin;
const getAdminCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listClasi = yield tbl_administrador_1.Administrador.findAll({ attributes: ['id_admin', 'nombres'] });
    res.json(listClasi);
});
exports.getAdminCreate = getAdminCreate;
const getAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //include sirve para poder extraer los datos por relaciones
    const listAdmin = yield tbl_administrador_1.Administrador.findAll({ include: [
            //modelo por relacion y el atriutes son los campos que se extraen de la relacion
            { model: tbl_tipo_doc_1.Tipo_doc, attributes: ['tipo_doc'] },
            { model: tbl_cuenta_1.Cuenta, attributes: ['correo'] }
        ] });
    res.json({ listAdmin });
});
exports.getAdmin = getAdmin;
