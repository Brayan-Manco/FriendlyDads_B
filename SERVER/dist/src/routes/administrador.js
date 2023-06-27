"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const administrador_1 = require("../controllers/administrador");
const configMulter_1 = require("../models/configMulter");
const router = (0, express_1.default)();
router.get("/", administrador_1.getAdmin);
// Ruta para crear un nuevo administrador
router.post('/', configMulter_1.upload.single('foto'), administrador_1.newAdmin);
exports.default = router;
