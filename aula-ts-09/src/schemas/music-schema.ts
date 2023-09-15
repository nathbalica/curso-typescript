import Joi from "joi";
import { Music } from "protocols";

export const musicSchema = Joi.object<Music>({
    title: Joi.string().min(2).max(255).required(),
    artist: Joi.string().min(2).max(255).required()
});
