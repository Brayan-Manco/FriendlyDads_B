import { Request, Response } from "express"
import multer from "multer";
import path from "path";

// Configurar el almacenamiento de archivos con multer para admin 


//multer.diskStorage pasa un objeto de opciones que define cómo 
//se almacenarán los archivos en el disco.
const storageDocs = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "docs"); // Ruta de la carpeta de destino de las imágenes
    }, 
    filename: (req, file, cb) => {
        //nombramos el archivo Date.now tiempo actual
        //concatenado con un número aleatorio generado con el Math.round(Math.random()
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileExtension = file.originalname.split(".").pop(); //.split separa y el .pop eliminar
        const ubic = "../docs/";
        const filename = ubic + uniqueSuffix + "." + fileExtension;
        cb(null, filename); // Nombre de archivo único
    },
});

// Configurar multer con el almacenamiento
const uploadDocs = multer({ storage: storageDocs });

// Ruta para obtener la imagen

const getUploadedFileDocs = (req: Request, res:Response) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, "../docs", filename));
};


export { uploadDocs, getUploadedFileDocs };
