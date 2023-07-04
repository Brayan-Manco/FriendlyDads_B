"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUploadedFileDocs = exports.uploadDocs = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Configurar el almacenamiento de archivos con multer para admin 
//multer.diskStorage pasa un objeto de opciones que define cómo 
//se almacenarán los archivos en el disco.
const storageDocs = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "docs"); // Ruta de la carpeta de destino de las imágenes
    },
    filename: (req, file, cb) => {
        //nombramos el archivo Date.now tiempo actual
        //concatenado con un número aleatorio generado con el Math.round(Math.random()
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ubication = "../docs/";
        const fileExtension = file.originalname.split(".").pop(); //.split separa y el .pop eliminar
        const filename = ubication + uniqueSuffix + "." + fileExtension;
        cb(null, filename); // Nombre de archivo único
    },
});
// Configurar multer con el almacenamiento
const uploadDocs = (0, multer_1.default)({ storage: storageDocs });
exports.uploadDocs = uploadDocs;
// Ruta para obtener la imagen
const getUploadedFileDocs = (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path_1.default.join(__dirname, "../docs/", filename));
};
exports.getUploadedFileDocs = getUploadedFileDocs;
