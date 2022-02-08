import express, { NextFunction, Request, Response } from "express";

import routes from "./routes";

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(
      (error: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: error.message });
      }
    );
  }
}

export default new App().server;
