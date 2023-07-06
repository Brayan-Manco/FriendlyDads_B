"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const bebe_1 = require("../controllers/bebe");
const router = (0, express_1.Router)();
router.post('/', validator_token_1.default, bebe_1.newBebe);
router.get('/', validator_token_1.default, bebe_1.getBebes);
//buscar el fk_id_usuario para obtener
router.get('/findForUser/:id', validator_token_1.default, bebe_1.getOneBebe);
router.delete('/deleteBebe/:id', validator_token_1.default, bebe_1.deleteBebe);
exports.default = router;
