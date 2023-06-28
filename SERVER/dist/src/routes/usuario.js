"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const configMulter_1 = require("../models/configMulter");
const router = (0, express_1.Router)();
router.post('/', configMulter_1.upload.single('foto'), usuario_1.newUsuario);
router.get('/', usuario_1.getUsuario);
exports.default = router;
