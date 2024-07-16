import express from 'express';
import PingRouter from './routes/ping';

export class App {
    private app: express.Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.app.use(PingRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }
}
