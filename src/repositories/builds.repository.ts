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

export const BuildsRepository = {
  create,
};
