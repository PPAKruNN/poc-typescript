import { Request, Response } from "express";
import { ApiError } from "protocols";

function ErrorHandler(error_: any, res: Response) {
  // n deu pra evitar o ANY, express rejeitou TODAS AS tentativas.
  const error = error_ as ApiError;

  if (!error.httpCode) return res.status(500).send(error.message);

  res.status(error.httpCode).send(error.message);
}

export { ErrorHandler };
