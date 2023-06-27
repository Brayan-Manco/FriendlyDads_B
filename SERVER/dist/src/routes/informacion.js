"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const informacion_1 = require("../controllers/informacion");
const validator_token_1 = __importDefault(require("./validator-token"));
const docsMulter_1 = require("../models/docsMulter");
const router = (0, express_1.Router)();
router.post('/update', docsMulter_1.uploadDocs.single("doc"), informacion_1.updteInfo);
router.post('/create', docsMulter_1.uploadDocs.single("doc"), informacion_1.newInfo);
router.get('/find', validator_token_1.default, informacion_1.getInformacion);
router.post('/search', informacion_1.getConsult);
exports.default = router;
