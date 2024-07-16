import { App } from './app';

const port = parseInt(process.env.SERVER_PORT as string, 10) || 5000;

new App(port).listen();
