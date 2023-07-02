"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUser = exports.loginUser = exports.getCuenta = exports.newCuenta = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const tbl_cuenta_1 = require("../models/tbl_cuenta");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tbl_rol_1 = require("../models/tbl_rol");
const tbl_administrador_1 = require("../models/tbl_administrador");
const newCuenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //extraemos los datos necesarios de la solicitud (req.body), 
    //como el usuario,correo electrónico, la contraseñay el rol.
    const { usuario, correo, contrasena, fk_id_rol } = req.body;
    //el hash encripta la contraseña
    const hashedContrasena = yield bcrypt_1.default.hash(contrasena, 10);
    //se hace la consulta si existe el usuario
    const usuarioExits = yield tbl_cuenta_1.Cuenta.findOne({ where: { usuario: usuario } });
    //se hace la consulta si existe el correo
    const correoExist = yield tbl_cuenta_1.Cuenta.findOne({ where: { correo: correo } });
    //se hace condicion si ya exite y retorna un mensaje si existe
    if (usuarioExits) {
        return res.status(400).json({
            msg: `Usuario en uso`
        });
    }
    if (correoExist) {
        return res.status(400).json({
            msg: `Correo en uso`
        });
    }
    try {
        //creamos una cuenta mediante el Cuenta.create
        yield tbl_cuenta_1.Cuenta.create({
            usuario: usuario,
            correo: correo,
            contrasena: hashedContrasena,
            fk_id_rol: fk_id_rol
        });
        //devuelve un mensaje de exito de la creacion de la cuenta
        //en fomarmato JSON utilizando la funcion res.json()
        res.json({
            msg: 'Usuario Creado',
        });
    }
    catch (error) {
        //devuelve un mensaje de error en la creacion de la cuenta
        //en fomarmato JSON utilizando la funcion res.json()
        res.status(400).json({
            msg: 'ERROR CREATE USER', error
        });
    }
});
exports.newCuenta = newCuenta;
const getCuenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //se hace un consulda a base datos mediante mediante la funcion Cuenta.findAll()
    const listCuenta = yield tbl_cuenta_1.Cuenta.findAll({ include: tbl_rol_1.Rol });
    //se devuelve la lista de cuentas como respuesta en formato JSON utilizando 
    //la función res.json(). Esto envía la lista de cuentas al cliente que realizó la solicitud.
    res.json(listCuenta);
});
exports.getCuenta = getCuenta;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, contrasena } = req.body;
    // Validamos si el usuario existe en la base de datos
    const cuenta = yield tbl_cuenta_1.Cuenta.findOne({ where: { correo: correo } });
    if (!cuenta) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${correo} en la base datos`
        });
    }
    //Si la contraseña es válida, se genera un token de autenticación utilizando la 
    //biblioteca jsonwebtoken (jwt.sign). 
    // Validamos password
    const passwordValid = yield bcrypt_1.default.compare(contrasena, cuenta.contrasena);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecta`
        });
    }
    // Generamos token
    const token = jsonwebtoken_1.default.sign({
        correo: correo, rol: cuenta.fk_id_rol, id: cuenta.id_cuenta, primera_vez: cuenta.primera_vez
    }, process.env.SECRET_KEY || 'admin');
    res.json(token);
    //    res.json(cuenta);
});
exports.loginUser = loginUser;
const FindUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const User = yield tbl_administrador_1.Administrador.findOne({ where: { fk_id_cuenta: id } });
    res.json(User);
});
exports.FindUser = FindUser;
