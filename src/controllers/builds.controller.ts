import { Request, Response } from "express";
import httpStatus from "http-status";
import { BuildsService } from "../services/builds.services";

async function create(_req: Request, res: Response) {
  const id = await BuildsService.create();

  res.status(httpStatus.CREATED).send(id);
}

function read() {}

function update() {}

function del() {}

export const BuildsController = {
  create,
  read,
  update,
  del,
};
