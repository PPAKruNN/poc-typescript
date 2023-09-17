import { BuildsController } from "../controllers/builds.controller";
import { Router } from "express";

const buildsRouter = Router();

buildsRouter.get("/build");
buildsRouter.post("/build", BuildsController.create);
buildsRouter.patch("/build");
buildsRouter.delete("/build");

export { buildsRouter };
