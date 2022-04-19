import express from 'express';
import sqlite3 from 'sqlite3';
import db from './config/database.config';
import Controller from './interfaces/controller.interface';
import CorsMiddleware from './middlewares/cors.middleware';

export default class App {

    readonly app: express.Application;
    readonly port: number;
    constructor(controllers: Controller[], port: number | undefined) {
      this.app = express();
      this.port = port ? port : 3000;
   
      this.initializeMiddlewares();
      this.initializeControllers(controllers);
    }

    private initializeMiddlewares(): void {
      this.app.use(express.json());
      this.app.use(express.urlencoded({extended: false}));
      this.app.use(new CorsMiddleware().init());
    }

    private initializeControllers(controllers: Controller[]): void {
      controllers.forEach((controller: Controller) => {
        this.app.use(controller.path, controller.router);
      });
    }
   
    public start(): void {
      db.sync().then(() => {
        console.log('Connected to database');
      });
      this.app.listen(this.port, () => {
        console.log(`App listening on the port ${this.port}`);
      });
    }

}
