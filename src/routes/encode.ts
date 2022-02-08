import { NextFunction, Request, Response } from "express";
const crypto = require("crypto");

const salt = "OverlayAnalyticsEvaluation2022";

function get(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body.name) throw new Error("Name is required");

    const name = req.body.name;

    const head = Buffer.from(
      JSON.stringify({ alg: "HS256", typ: "jwt" })
    ).toString("base64");
    const body = Buffer.from(JSON.stringify({ name: name })).toString("base64");
    const signature = crypto
      .createHmac("SHA256", salt)
      .update(`${head}.${body}`)
      .digest("base64");

    res.status(200).json({ token: `${head}.${body}.${signature}`, name: name });
  } catch (err) {
    next(err);
  }
}

exports.get = get;
