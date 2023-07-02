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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const configMulter_1 = require("./configMulter");
const informacion_1 = __importDefault(require("../routes/informacion"));
const cuenta_1 = __importDefault(require("../routes/cuenta"));
const parentesco_1 = __importDefault(require("../routes/parentesco"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const tipo_doc_1 = __importDefault(require("../routes/tipo_doc"));
const rol_1 = __importDefault(require("../routes/rol"));
const estado_1 = __importDefault(require("../routes/estado"));
const clasificacion_1 = __importDefault(require("../routes/clasificacion"));
const bebe_1 = __importDefault(require("../routes/bebe"));
const administrador_1 = __importDefault(require("../routes/administrador"));
const connection_1 = __importDefault(require("../db/connection"));
const tbl_rol_1 = require("./tbl_rol");
const tbl_cuenta_1 = require("./tbl_cuenta");
const tbl_estado_1 = require("./tbl_estado");
const tbl_tipo_doc_1 = require("./tbl_tipo_doc");
const tbl_clasificacion_1 = require("./tbl_clasificacion");
const tbl_parentesco_1 = require("./tbl_parentesco");
const tbl_bebe_1 = require("./tbl_bebe");
const tbl_usuario_1 = require("./tbl_usuario");
const tbl_informacion_1 = require("./tbl_informacion");
const tbl_administrador_1 = require("./tbl_administrador");
const docsMulter_1 = require("./docsMulter");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.mdlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('aplicacion corrinedo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.get("/docs:filename", docsMulter_1.getUploadedFileDocs);
        this.app.get("/uploads:filename", configMulter_1.getUploadedFile);
        this.app.use('/api/info', informacion_1.default);
        this.app.use('/api/cuenta', cuenta_1.default);
        this.app.use('/api/parentesco', parentesco_1.default);
        this.app.use('/api/usuario', usuario_1.default);
        this.app.use('/api/tipoDoc', tipo_doc_1.default);
        this.app.use('/api/rol', rol_1.default);
        this.app.use('/api/estado', estado_1.default);
        this.app.use('/api/clasificacion', clasificacion_1.default);
        this.app.use('/api/bebe', bebe_1.default);
        this.app.use('/api/admin', administrador_1.default);
    }
    mdlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        //this.app.use(upload.single("foto"));
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.sync();
                yield tbl_rol_1.Rol.sync();
                yield tbl_cuenta_1.Cuenta.sync({ alter: true });
                yield tbl_estado_1.Estado.sync();
                yield tbl_tipo_doc_1.Tipo_doc.sync();
                yield tbl_parentesco_1.Parentesco.sync();
                yield tbl_usuario_1.Usuario.sync();
                yield tbl_bebe_1.Bebe.sync();
                yield tbl_administrador_1.Administrador.sync();
                yield tbl_clasificacion_1.Clasificacion.sync();
                yield tbl_informacion_1.Informacion.sync();
                console.log('Conexión Exitosa');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.default = Server;
