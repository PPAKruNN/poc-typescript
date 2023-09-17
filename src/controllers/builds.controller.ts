import { Request, Response } from "express";
import httpStatus from "http-status";
import { BuildsService } from "../services/builds.services";
import { BuildRouteParams } from "protocols";

async function create(_req: Request, res: Response) {
  const id = await BuildsService.create();

  res.status(httpStatus.CREATED).send(id);
}

async function read(req: Request, res: Response) {
  const { id } = req.params as BuildRouteParams;

  const build = await BuildsService.read(parseInt(id));

  res.status(httpStatus.OK).send(build);
}

function update() {}

function del() {}

export const BuildsController = {
  create,
  read,
  update,
  del,
};
