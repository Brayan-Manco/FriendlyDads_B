"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const clasificacion_1 = require("../controllers/clasificacion");
const configMulter_1 = require("../models/configMulter");
const router = (0, express_1.Router)();
router.post('/', configMulter_1.upload.single('foto'), clasificacion_1.newClasificacion);
router.get('/', validator_token_1.default, clasificacion_1.getClasificacion);
exports.default = router;
