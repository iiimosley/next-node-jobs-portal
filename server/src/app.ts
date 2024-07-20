import express from 'express';
import { json, urlencoded } from "body-parser";
import AppRouter from './routes';

export class App {
    private app: express.Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        
        this.app.use(AppRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }
}
