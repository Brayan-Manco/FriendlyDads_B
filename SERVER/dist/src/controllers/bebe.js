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
exports.getBebes = exports.newBebe = void 0;
const tbl_bebe_1 = require("../models/tbl_bebe");
const tbl_usuario_1 = require("../models/tbl_usuario");
const newBebe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_completo, fk_id_tipo_doc, numero_i, edad, fk_id_usuario } = req.body;
    const numeroExist = yield tbl_bebe_1.Bebe.findOne({ where: { numero_i: numero_i } });
    if (numeroExist) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el documento ${numero_i}`
        });
    }
    try {
        yield tbl_bebe_1.Bebe.create({
            nombre_completo: nombre_completo,
            fk_id_tipo_doc: fk_id_tipo_doc,
            numero_i: numero_i,
            edad: edad,
            fk_id_usuario: fk_id_usuario
        });
        res.json({
            msg: 'Bebe agregado correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE CHILB', error
        });
    }
});
exports.newBebe = newBebe;
const getBebes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listBebes = yield tbl_bebe_1.Bebe.findAll({ include: tbl_usuario_1.Usuario });
    res.json({ listBebes });
});
exports.getBebes = getBebes;
