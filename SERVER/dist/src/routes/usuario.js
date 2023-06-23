"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const usuario_1 = require("../controllers/usuario");
const configMulter_1 = require("../models/configMulter");
const router = (0, express_1.Router)();
router.post('/', configMulter_1.upload.single('foto'), usuario_1.newUsuario);
router.get('/', validator_token_1.default, usuario_1.getUsuario);
exports.default = router;
