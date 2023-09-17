import starData from '../../data/star.json'
import { Request, Response } from "express";


export async function getStarsController(req: Request, res: Response) {
    const type = req.query.type as string
    let stars = starData
    if(type){
        stars = starData.filter((star) => star.type.includes(type))
    }
    res.status(200).json(stars)
}