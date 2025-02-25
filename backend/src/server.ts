import "reflect-metadata";
import 'dotenv/config';
import express from "express";
import { AppDataSource } from "./database/data-source";
import { UserRegisters } from "./app/models/models";

const hostServer: string = String(process.env.HOST_SERVER);
const portServer: number = Number(process.env.PORT_SERVER);

AppDataSource.initialize().then(async () => {
    const server = express();

    console.log('Connected at database with sucessful !');
    server.use(express.json());

      server.listen(portServer, hostServer, () => {
        console.log(`Server is running in http://${hostServer}:${portServer}`);
      })
  })
.catch((error) => {
  console.log(`Error: ${error}`)
})









































































































