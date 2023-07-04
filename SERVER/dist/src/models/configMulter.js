"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUploadedFile = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Configurar el almacenamiento de archivos con multer para admin 
//multer.diskStorage pasa un objeto de opciones que define cómo 
//se almacenarán los archivos en el disco.
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Ruta de la carpeta de destino de las imágenes
    },
    filename: (req, file, cb) => {
        //nombramos el archivo Date.now tiempo actual
        //concatenado con un número aleatorio generado con el Math.round(Math.random()
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileExtension = file.originalname.split(".").pop(); //.split separa y el .pop eliminar
        const ubication = "../uploads/";
        const filename = ubication + uniqueSuffix + "." + fileExtension;
        cb(null, filename); // Nombre de archivo único
    },
});
// Configurar multer con el almacenamiento
const upload = (0, multer_1.default)({ storage: storage });
exports.upload = upload;
// Ruta para obtener la imagen
const getUploadedFile = (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path_1.default.join(__dirname, "../uploads/", filename));
};
exports.getUploadedFile = getUploadedFile;
