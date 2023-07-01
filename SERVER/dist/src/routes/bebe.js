"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bebe_1 = require("../controllers/bebe");
const router = (0, express_1.Router)();
router.post('/', bebe_1.newBebe);
router.get('/', bebe_1.getBebes);
//buscar el fk_id_usuario para obtener
router.get('/findForUser/:id', bebe_1.getOneBebe);
router.delete('/deleteBebe/:id', bebe_1.deleteBebe);
exports.default = router;
