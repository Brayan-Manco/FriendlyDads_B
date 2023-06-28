"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuenta_1 = require("../controllers/cuenta");
const validator_token_1 = __importDefault(require("./validator-token"));
const router = (0, express_1.Router)();
router.get('/', validator_token_1.default, cuenta_1.getCuenta);
router.post('/', cuenta_1.newCuenta);
router.post('/login', cuenta_1.loginUser);
exports.default = router;
