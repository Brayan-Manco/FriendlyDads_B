"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clasificacion_1 = require("../controllers/clasificacion");
const configMulter_1 = require("../models/configMulter");
const router = (0, express_1.Router)();
router.post('/', configMulter_1.upload.single('foto'), clasificacion_1.newClasificacion);
router.get('/find', clasificacion_1.getClasificacion);
exports.default = router;
