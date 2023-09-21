import { Build } from "../protocols";
import Prisma from "../database/database.connection";
import { Errors } from "../Errors/errors";
import httpStatus from "http-status";

async function create(serializedBuild: string): Promise<number> {
  const result = await Prisma.builds.create({
    data: { data: serializedBuild },
    select: { id: true },
  });

  return result.id;
}

async function update(id: number, serializedBuild: string) {
  await Prisma.builds.update({
    where: { id: id },
    data: { data: serializedBuild },
  });
}

async function read(id: number): Promise<Build> {
  const result = await Prisma.builds
    .findUnique({
      select: { data: true, id: true },
      where: { id: id },
    })
    .catch(() => {
      throw Errors.DbError(httpStatus.NOT_FOUND, "Build not found");
    });

  const build: Build = JSON.parse(result.data.toString());
  return build;
}

async function checkExistence(id: number): Promise<boolean> {
  const result = await Prisma.builds.findUnique({
    where: { id: id },
  });

  return result.id !== undefined;
}

async function del(id: number) {
  await Prisma.builds.delete({
    where: { id: id },
  });
}

export const BuildsRepository = {
  create,
  read,
  update,
  checkExistence,
  del,
};
