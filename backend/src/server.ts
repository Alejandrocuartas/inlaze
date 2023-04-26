import express from 'express';
const cors = require('cors');

import dbConnector from './data-access';
import { DayRouter, UserRouter } from './routes';

class ServerModel {
    private origin
    private port
    app
    constructor() {
        this.origin = process.env.ORIGIN;
        this.app = express();
        this.port = process.env.PORT;

        this.dbConnector();

        this.middlewares();

        this.routes();
    }

    async dbConnector() {
        await dbConnector();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            origin: this.origin,
        }));
    }

    routes() {
        this.app.use("/api/user", UserRouter)
        this.app.use("/api/message/create", DayRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening at', this.port);
        });
    }
}

export default ServerModel;