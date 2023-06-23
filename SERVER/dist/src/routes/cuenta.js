"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuenta_1 = require("../controllers/cuenta");
const router = (0, express_1.Router)();
router.get('/', cuenta_1.getCuenta);
router.post('/', cuenta_1.newCuenta);
router.post('/login', cuenta_1.loginUser);
exports.default = router;
