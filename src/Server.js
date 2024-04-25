import express from 'express';
import { tasksRouter } from './routes/tasks.route.js';

export class Server {
    constructor(port) {
        this.app = express();

        this.setRoutes();

        this.listen(port);
    }

    setRoutes() {
        this.app.use(express.static('public'));
        this.app.use('/api/tasks', tasksRouter);
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log("app started. Listen at port " + port);
        });
    }
}
