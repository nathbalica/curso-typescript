import { Router } from "express";
import musicController from "../controllers/music-controller";
import { musicSchema } from "../schemas/music-schema";
import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateBody = (schema: Joi.Schema) => {
    return (req: Request, res: Response, next: Function) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      next();
    };
  };

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateBody(musicSchema),  musicController.createMusic); // TODO: validação via Joi

export default musicRouter;