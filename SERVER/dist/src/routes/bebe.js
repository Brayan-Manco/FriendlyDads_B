"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const bebe_1 = require("../controllers/bebe");
const router = (0, express_1.Router)();
router.post('/', bebe_1.newBebe);
router.get('/', validator_token_1.default, bebe_1.getBebes);
exports.default = router;
