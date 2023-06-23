import dotenv from 'dotenv'
import Server from "./src/models/server";

// configuramos el dotenv
dotenv.config();

const server = new Server();