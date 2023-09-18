import { Request, Response } from "express";

export async function createStarsController(req: Request, res: Response) {
    const { id, name, type, distance, mass, radius, temperature, luminosity, composition, stellar_history } = req.body
    if(!id || !name || !type || !distance || !mass || !radius || !temperature || !luminosity || !composition || !stellar_history){
        res.status(400).json({
            error: 'BAD_REQUEST',
            message: `There are missing params for this request`
        })
    }
    res.status(200).json({
        status: 'OK'
    })
}