"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const rol_1 = require("../controllers/rol");
const router = (0, express_1.Router)();
router.post('/', rol_1.newRol);
router.get('/', validator_token_1.default, rol_1.getRol);
exports.default = router;
