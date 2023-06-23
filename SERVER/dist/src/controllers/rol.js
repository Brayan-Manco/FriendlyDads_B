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
exports.getRol = exports.newRol = void 0;
const tbl_rol_1 = require("../models/tbl_rol");
const newRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo_rol } = req.body;
    const tipo_rolExist = yield tbl_rol_1.Rol.findOne({ where: { tipo_rol: tipo_rol } });
    if (tipo_rolExist) {
        return res.status(400).json({
            msg: `El rol ${tipo_rol} ya existe`
        });
    }
    try {
        yield tbl_rol_1.Rol.create({
            tipo_rol: tipo_rol
        });
        res.json({
            msg: 'Rol creado correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE ROL'
        });
    }
});
exports.newRol = newRol;
const getRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listRol = yield tbl_rol_1.Rol.findAll();
    res.json({ listRol });
});
exports.getRol = getRol;
