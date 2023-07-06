"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const tipo_doc_1 = require("../controllers/tipo_doc");
const router = (0, express_1.Router)();
router.post('/new', tipo_doc_1.newTipoD);
router.get('/obtener', validator_token_1.default, tipo_doc_1.getTipo_doc);
exports.default = router;
