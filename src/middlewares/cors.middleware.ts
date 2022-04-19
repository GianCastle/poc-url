import express from 'express';
import cors from 'cors';

export default class CorsMiddleware {

    private readonly app: express.Application;

    constructor() {
        this.app = express();
        this.init = this.init.bind(this);
    }

    init() {
        this.app.use(cors());
        return this.app;
    }

}