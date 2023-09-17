import {
  RequestOptions,
  validateSchema,
} from "../middlewares/validateSchema.middleware";
import { BuildsController } from "../controllers/builds.controller";
import { Router } from "express";
import { BuildsSchemas } from "../schemas/Builds.schema";

const buildsRouter = Router();

buildsRouter.post("/build", BuildsController.create);
buildsRouter.get(
  "/build/:id",
  validateSchema(BuildsSchemas.locator, RequestOptions.params),
  BuildsController.read
);
// - Implementar erro do banco de dados (Colocar no repository).
buildsRouter.put(
  "/build/:id",
  validateSchema(BuildsSchemas.locator, RequestOptions.params)
);
// [TODO]:
// - Apenas regenerar a build para um ID específico!
// OBS: Não regenerar se o ID não existir atualmente. (Tente dar um get antes para verificar se o id existe)
buildsRouter.delete(
  "/build/:id",
  validateSchema(BuildsSchemas.locator, RequestOptions.params)
);
// [TODO]:
// - Apagar o registro do ID especificado.

export { buildsRouter };
