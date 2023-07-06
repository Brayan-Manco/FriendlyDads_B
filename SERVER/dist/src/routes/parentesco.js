"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const parentesco_1 = require("../controllers/parentesco");
const validator_token_1 = __importDefault(require("./validator-token"));
const router = (0, express_1.Router)();
router.post('/', parentesco_1.newParen);
router.get('/listParen', validator_token_1.default, parentesco_1.getParen);
exports.default = router;
