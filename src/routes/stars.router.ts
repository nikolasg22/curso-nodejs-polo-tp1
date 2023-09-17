import { Request, Response, Router } from "express";
import starData from '../data/star.json'
import { getStarsController } from "../controller/stars/getStars.controller";


export const router = Router();

//basepath---> /star

router.get('/', getStarsController)