import starData from '../../data/star.json'
import { Request, Response } from "express";

export async function getStarsByIDController(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const star = starData.find((star) => star.id === id)
    if (!star) {
        res.status(404).json({
            error: 'STAR_NOT_FOUND',
            message: `Star ${id} not found in the database`
        });
    } else {
        res.status(200).json(star);
    }
    
}