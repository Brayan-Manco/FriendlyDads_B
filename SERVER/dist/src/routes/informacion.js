"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const informacion_1 = require("../controllers/informacion");
const validator_token_1 = __importDefault(require("./validator-token"));
const router = (0, express_1.Router)();
// router.put('/update/:id', validateToken, uploadDocs.single("doc"), updteInfo)
router.put('/update/:id', validator_token_1.default, informacion_1.updteInfo);
// router.post('/create',uploadDocs.single("doc"), newInfo);
router.post('/create', validator_token_1.default, informacion_1.newInfo);
router.get('/find', validator_token_1.default, informacion_1.getInformacion);
router.get('/findOneUpdate/:id', informacion_1.getFileUpdate);
router.get('/findInfo/:id', validator_token_1.default, informacion_1.selectInfo);
router.get('/findOneInfo/:id', validator_token_1.default, informacion_1.selectOneInfo);
router.post('/search', validator_token_1.default, informacion_1.getConsult);
router.post('/find/:id', validator_token_1.default, informacion_1.getIdInfo);
router.delete('/delete/:id', validator_token_1.default, informacion_1.deleteInfo);
exports.default = router;
