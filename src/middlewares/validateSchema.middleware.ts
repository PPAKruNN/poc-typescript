import { NextFunction, Request, Response } from "express";
import { Errors } from "../Errors/errors";
import { Schema } from "joi";

function validateSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body);

    if (result.error) {
      throw Errors.ValidationError(result.error);
    }

    next();
  };
}

export { validateSchema };
