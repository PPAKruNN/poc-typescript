import { Build } from "protocols";
import { db } from "../database/database.connection";

async function create(serializedBuild: string) {
  const result = await db.query<Number>(
    `
      INSERT INTO builds(data) 
      VALUES ($1) RETURNING builds.id
  `,
    [serializedBuild]
  );

  // if(result.rowCount === 0) throw DbError;
  return result.rows[0];
}

async function read(id: number): Promise<Build> {
  const result = await db.query<Build>(
    `SELECT data FROM builds WHERE id = $1`,
    [id]
  );

  // if (result.rowCount === 0) throw error;
  return result.rows[0];
}

export const BuildsRepository = {
  create,
  read,
};
