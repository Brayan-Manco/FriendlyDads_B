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
exports.getUsuario = exports.newUsuario = void 0;
const tbl_usuario_1 = require("../models/tbl_usuario");
const newUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fk_id_paren, fk_id_estado, nombres, apellidos, fk_id_tipo_doc, numero_i, edad, fk_id_cuenta } = req.body;
    let foto = "";
    if (req.file) {
        foto = req.file.filename;
    }
    const numeroExist = yield tbl_usuario_1.Usuario.findOne({ where: { numero_i: numero_i } });
    const fk_id_cuentaExist = yield tbl_usuario_1.Usuario.findOne({ where: { fk_id_cuenta: fk_id_cuenta } });
    if (numeroExist) {
        return res.status(400).json({
            msg: 'El documento ya esta asociado a otro usuario'
        });
    }
    if (fk_id_cuentaExist) {
        return res.status(400).json({
            msg: `ya hay una cuenta asocida a ${fk_id_cuenta}`
        });
    }
    try {
        yield tbl_usuario_1.Usuario.create({
            fk_id_paren: fk_id_paren,
            fk_id_estado: fk_id_estado,
            nombres: nombres,
            apellidos: apellidos,
            fk_id_tipo_doc: fk_id_tipo_doc,
            numero_i: numero_i,
            edad: edad,
            fk_id_cuenta: fk_id_cuenta,
            ruta_imagen: foto,
        });
        res.json({
            msg: 'Usuario creado correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE USER'
        });
    }
});
exports.newUsuario = newUsuario;
const getUsuario = (rep, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsuario = yield tbl_usuario_1.Usuario.findAll();
    res.json(listUsuario);
});
exports.getUsuario = getUsuario;
