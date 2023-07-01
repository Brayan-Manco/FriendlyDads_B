"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const parentesco_1 = require("../controllers/parentesco");
const router = (0, express_1.Router)();
router.post('/', parentesco_1.newParen);
router.get('/listParen', parentesco_1.getParen);
exports.default = router;
