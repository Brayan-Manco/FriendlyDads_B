"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const estado_1 = require("../controllers/estado");
const router = (0, express_1.Router)();
router.post('/', estado_1.newEstado);
router.get('/', validator_token_1.default, estado_1.getEstado);
exports.default = router;
