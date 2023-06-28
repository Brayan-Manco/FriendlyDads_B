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
exports.getTipo_doc = exports.newTipoD = void 0;
const tbl_tipo_doc_1 = require("../models/tbl_tipo_doc");
const newTipoD = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo_doc, siglas } = req.body;
    const tipoDocExist = yield tbl_tipo_doc_1.Tipo_doc.findOne({ where: { tipo_doc: tipo_doc } });
    const siglaExist = yield tbl_tipo_doc_1.Tipo_doc.findOne({ where: { tipo_doc: tipo_doc } });
    if (tipoDocExist) {
        return res.status(400).json({
            msg: 'ya existe el documento'
        });
    }
    if (siglaExist) {
        return res.status(400).json({
            msg: 'ya existe la sigla'
        });
    }
    try {
        yield tbl_tipo_doc_1.Tipo_doc.create({
            tipo_doc: tipo_doc,
            siglas: siglas
        });
        res.json({
            msg: 'Documento creado correctamente'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ERROR CREATE DOC'
        });
    }
});
exports.newTipoD = newTipoD;
const getTipo_doc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listTipo_doc = yield tbl_tipo_doc_1.Tipo_doc.findAll();
    res.json(listTipo_doc);
});
exports.getTipo_doc = getTipo_doc;
