"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bebe_1 = require("../controllers/bebe");
const router = (0, express_1.Router)();
router.post('/', bebe_1.newBebe);
router.get('/', bebe_1.getBebes);
exports.default = router;
