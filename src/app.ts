import express, {Request, Response} from "express"

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'Hola Mundo con Express. By Nico Gasco'
    })
})

app.listen(PORT, () => {
    console.log('Servidor express con TS conectado')
})