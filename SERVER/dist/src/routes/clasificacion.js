"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const clasificacion_1 = require("../controllers/clasificacion");
const router = (0, express_1.Router)();
router.delete('/delete/:id', validator_token_1.default, clasificacion_1.deleteClasi);
router.post('/', validator_token_1.default, clasificacion_1.newClasificacion);
router.get('/findClasi', validator_token_1.default, clasificacion_1.getClasi);
router.get('/find', validator_token_1.default, clasificacion_1.getClasiAll);
router.get('/find/:id', validator_token_1.default, clasificacion_1.getIdClasi);
exports.default = router;
