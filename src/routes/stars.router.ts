import { Request, Response, Router } from "express";
import starData from '../data/star.json'
import { getStarsController } from "../controller/stars/getStars.controller"
import { getStarsByIDController } from "../controller/stars/getStarsByID.controller"


export const router = Router();

//basepath---> /star

router.get('/', getStarsController)
router.get('/stars/:id', getStarsByIDController)