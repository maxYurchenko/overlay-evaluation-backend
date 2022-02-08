import { NextFunction, Request, Response } from "express";
const request = require("request");

function get(req: Request, res: Response, next: NextFunction) {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos";

    request(url, (error: Error, response: Response, body: string) => {
      try {
        if (!response || response.statusCode !== 200 || !body)
          throw new Error("Error happened during data fetch");

        res.json(JSON.parse(body));
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
}

exports.get = get;
