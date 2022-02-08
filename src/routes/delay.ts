import { NextFunction, Request, Response } from "express";

function get(req: Request, res: Response, next: NextFunction) {
  try {
    setTimeout(() => {
      res.json({ message: "Times up!" });
    }, 1000 * req.body.seconds);
  } catch (err) {
    next(err);
  }
}

exports.get = get;
