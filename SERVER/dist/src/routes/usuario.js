"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_token_1 = __importDefault(require("./validator-token"));
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
// router.post('/create',upload.single('foto'),newUsuario);
router.post('/create', validator_token_1.default, usuario_1.newUsuario);
router.put('/estado/:id', validator_token_1.default, usuario_1.updateTime);
router.get('/', validator_token_1.default, usuario_1.getUsuario);
router.put('/update/:id', validator_token_1.default, usuario_1.UpdateUsuario);
router.get('/findUserOne/:id', validator_token_1.default, usuario_1.getUserFindOne);
router.get('/ifExist/:id', validator_token_1.default, usuario_1.getIfExist);
exports.default = router;
