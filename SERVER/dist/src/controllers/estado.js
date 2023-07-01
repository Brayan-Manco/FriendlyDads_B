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
exports.getEstado = exports.newEstado = void 0;
const tbl_estado_1 = require("../models/tbl_estado");
const newEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { estado } = req.body;
    const estadoExist = yield tbl_estado_1.Estado.findOne({ where: { estado: estado } });
    if (estadoExist) {
        return res.status(400).json({
            msg: 'El estado ya existe'
        });
    }
    try {
        yield tbl_estado_1.Estado.create({
            estado: estado
        });
        res.json({
            msg: 'Estado creado correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE STATUS', error
        });
    }
});
exports.newEstado = newEstado;
const getEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listEstado = yield tbl_estado_1.Estado.findAll({ attributes: ['id_estado', 'estado'] });
    res.json(listEstado);
});
exports.getEstado = getEstado;
