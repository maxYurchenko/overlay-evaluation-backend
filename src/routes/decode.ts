import { NextFunction, Request, Response } from "express";
import jwt_decode from "jwt-decode";

function get(req: Request, res: Response, next: NextFunction) {
  console.log(1);
  try {
    const token = req.body.token;
    const decoded = jwt_decode(token);

    res.json(decoded);
  } catch (err) {
    next(err);
  }
}

exports.get = get;
