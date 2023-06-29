import express, {Application} from 'express';
import cors from "cors";
import { getUploadedFile } from "./configMulter";
import routerInfo from '../routes/informacion';
import routerCuenta from '../routes/cuenta';
import routerParen from '../routes/parentesco';
import routerUsuario from "../routes/usuario";
import routerTipoDoc from "../routes/tipo_doc";
import routerRol from "../routes/rol";
import routerEstado from "../routes/estado";
import routerClasificacion from "../routes/clasificacion";
import routerBebe from "../routes/bebe";
import routerAdmin from "../routes/administrador";
import sequelize from "../db/connection";
import { Rol } from './tbl_rol';
import { Cuenta } from './tbl_cuenta';
import { Estado } from './tbl_estado';
import { Tipo_doc } from './tbl_tipo_doc';
import { Clasificacion } from './tbl_clasificacion';
import { Parentesco } from './tbl_parentesco';
import { Bebe } from './tbl_bebe';
import { Usuario } from './tbl_usuario';
import { Informacion } from './tbl_informacion';
import { Administrador } from './tbl_administrador';
import { getUploadedFileDocs } from './docsMulter';



class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port= process.env.PORT || '3001';

        this.listen();
        this.mdlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('aplicacion corrinedo en el puerto '+ this.port);
        })
    }
    routes() {
        this.app.get("/docs:filename",getUploadedFileDocs);
        this.app.get("/uploads:filename", getUploadedFile);
        this.app.use('/api/info', routerInfo);
        this.app.use('/api/cuenta', routerCuenta);
        this.app.use('/api/parentesco', routerParen);
        this.app.use('/api/usuario', routerUsuario);
        this.app.use('/api/tipoDoc', routerTipoDoc);
        this.app.use('/api/rol', routerRol);
        this.app.use('/api/estado', routerEstado);
        this.app.use('/api/clasificacion', routerClasificacion);
        this.app.use('/api/bebe', routerBebe);
        this.app.use('/api/admin', routerAdmin);
    }

    mdlewares() {

        this.app.use(express.json());
        this.app.use(cors());
        //this.app.use(upload.single("foto"));
    }

    async dbConnect() {
        try {
            await sequelize.sync();
            await Rol.sync();
            await Cuenta.sync();
            await Estado.sync();
            await Tipo_doc.sync();
            await Parentesco.sync();
            await Usuario.sync();
            await Bebe.sync();
            
            await Administrador.sync();
            await Clasificacion.sync();
            await Informacion.sync();
            console.log('Conexión Exitosa');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;