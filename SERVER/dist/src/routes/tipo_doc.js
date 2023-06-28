"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipo_doc_1 = require("../controllers/tipo_doc");
const router = (0, express_1.Router)();
router.post('/new', tipo_doc_1.newTipoD);
router.get('/', tipo_doc_1.getTipo_doc);
exports.default = router;
