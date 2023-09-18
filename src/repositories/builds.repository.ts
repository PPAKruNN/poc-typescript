import { Build } from "../protocols";
import { db } from "../database/database.connection";
import { Errors } from "../Errors/errors";
import httpStatus from "http-status";

async function create(serializedBuild: string) {
  const result = await db.query<Number>(
    `
      INSERT INTO builds(data) 
      VALUES ($1) RETURNING builds.id
  `,
    [serializedBuild]
  );

  return result.rows[0];
}

async function update(id: number, serializedBuild: string) {
  await db.query(`UPDATE builds SET data = $1 WHERE id = $2`, [
    serializedBuild,
    id,
  ]);
}

async function read(id: number): Promise<Build> {
  const result = await db.query<Build>(
    `SELECT data FROM builds WHERE id = $1`,
    [id]
  );

  if (result.rowCount === 0)
    throw Errors.DbError(httpStatus.NOT_FOUND, "Build not found");

  return result.rows[0];
}

async function checkExistence(id: number): Promise<boolean> {
  const result = await db.query(`SELECT id FROM builds WHERE id = $1`, [id]);

  return !(result.rowCount === 0);
}

async function del(id: number) {
  await db.query(`DELETE FROM builds WHERE id = $1`, [id]);
}

export const BuildsRepository = {
  create,
  read,
  update,
  checkExistence,
  del,
};
